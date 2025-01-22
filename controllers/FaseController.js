
const Fase = require("../models/Fase")
const DniVerificado = require("../models/DniVerificado")
const Lote = require("../models/Lote")

const FaseController = {
    
    async getAll(req, res) {
        try {
            const fase = await Fase.find()
            res.send(fase)
        } catch (error) {
            console.error(error);
        }
    },
    async create(req, res) {
        try {
            const { dni, nRegistro, ...faseData } = req.body; // Extraemos dni y nRegistro del cuerpo de la petición
    
            // Buscar el trabajador por dni
            const trabajador = await DniVerificado.findOne({ dni });
            if (!trabajador) {
                return res.status(404).send({ message: "Trabajador no encontrado con el dni proporcionado" });
            }
    
            // Buscar el lote por nRegistro
            const lote = await Lote.findOne({ nRegistro });
            if (!lote) {
                return res.status(404).send({ message: "Lote no encontrado con el nRegistro proporcionado" });
            }
    
            // Crear la fase usando el _id del trabajador y el _id del lote encontrado
            const fase = await Fase.create({
                ...faseData,
                trabajadorId: trabajador._id,
                loteId: lote._id,
            });
    
            res.status(201).send({ message: "New fase successfully created", fase });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error });
        }
    }
    
    
    
}

module.exports = FaseController