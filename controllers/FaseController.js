const Fase = require("../models/Fase");
const DniVerificado = require("../models/DniVerificado");
const Lote = require("../models/Lote");
const Historial = require("../models/Historial");

const FaseController = {
  async getFaseAlmacenada(req, res) {
    try {
        const fases = await Fase.find({
            terminado: false,
            nombre: "Almacen",
            $or: [
                { subFase: { $exists: false } }, // No existe el campo subFase
                { subFase: "" } // Existe pero está vacío
            ]
        }).populate("loteId");
        res.send(fases);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error al obtener las fases pendientes sin subFase" });
    }
},
async getFasePendienteAlmacenar(req, res) {
  try {
      const fases = await Fase.find({
          terminado: false,
          nombre: "Almacen",
          subFase: { $ne: "", $exists: true } // subFase tiene texto
      }).populate("loteId");
      res.send(fases);
  } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error al obtener las fases pendientes con subFase" });
  }
},
  async getAll(req, res) {
    try {
      const fase = await Fase.find();
      res.send(fase);
    } catch (error) {
      console.error(error);
    }
  },
  async create(req, res) {
    try {
      const { dni, nRegistro, ...faseData } = req.body; // Extraemos dni y nRegistro del cuerpo de la petición

      // Validación: Buscar el trabajador por dni
      const trabajador = await DniVerificado.findOne({ dni });
      if (!trabajador) {
        return res
          .status(404)
          .send({
            message: "Trabajador no encontrado con el dni proporcionado",
          });
      }

      // Validación: Buscar el lote por nRegistro
      const lote = await Lote.findOne({ nRegistro });
      if (!lote) {
        return res
          .status(404)
          .send({
            message: "Lote no encontrado con el nRegistro proporcionado",
          });
      }

      // Paso 1: Actualizar todas las fases existentes con el mismo nRegistro a terminado: true
      const updatedFases = await Fase.updateMany(
        { loteId: lote._id }, // Buscar fases que correspondan al lote encontrado
        { terminado: true,
          subFase: ""
         }, // Actualizar el campo terminado
      );

      // Paso 2: Registrar las fases actualizadas en la colección Historial, evitando duplicados
      const fasesActualizadas = await Fase.find({
        loteId: lote._id,
        terminado: true,
      }); // Obtenemos las fases actualizadas
      const historiales = [];

      for (const fase of fasesActualizadas) {
        // Verificamos si ya existe un registro idéntico en Historial
        const historialExistente = await Historial.findOne({
          nombreFase: fase.nombre,
          trabajadorId: fase.trabajadorId,
          fecha: fase.fecha,
        });

        if (!historialExistente) {
          // Si no existe, lo agregamos a la lista para insertar
          historiales.push({
            nombreFase: fase.nombre,
            trabajadorId: fase.trabajadorId,
            fecha: fase.fecha,
          });
        }
      }

      if (historiales.length > 0) {
        await Historial.insertMany(historiales); // Registramos en la colección Historial
        console.log("Historial actualizado:", historiales);
      } else {
        console.log(
          "No se agregaron nuevos registros al historial (todos ya existen)."
        );
      }


      // Paso 3: Crear la nueva fase usando el _id del trabajador y el _id del lote encontrado
      const nuevaFase = await Fase.create({
        ...faseData,
        trabajadorId: trabajador._id,
        loteId: lote._id,
      });
      // **Paso 4: Actualizar el lote con el ID de la nueva fase**
    await Lote.findByIdAndUpdate(
      lote._id,
      { faseId: nuevaFase._id },
      { new: true } // Devolverá el documento actualizado
    );


      // Respuesta con el resultado
      res.status(201).send({
        message: "Nueva fase creada exitosamente",
        updatedFases: updatedFases.nModified,
        historialesAgregados: historiales.length,
        nuevaFase,
      });
      
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Hubo un problema al procesar la solicitud", error });
    }
  },
  async getById(req, res) {
    try {
      const fase = await Fase.findById(req.params._id)
        .populate("trabajadorId")
        .populate("loteId");
      res.send(fase);
    } catch (error) {
      console.error(error);
    }
  },
  async getByName(req, res) {
    try {
      const { nombre } = req.params;

      // Busca coincidencia exacta en el campo "nombre"
      const fase = await Fase.findOne({ nombre })
      .populate("trabajadorId")
      .populate("loteId");

      res.send(fase);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = FaseController;
