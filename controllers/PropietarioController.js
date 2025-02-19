const Propietario = require("../models/Propietario");

const PropietarioController = {
  async getAll(req, res) {
    try {
      const propietario = await Propietario.find()
        .populate("loteId")
      res.send(propietario);
    } catch (error) {
      console.error(error);
    }
  },
  async create(req, res) {
    try {
      const propietario = await Propietario.create(req.body)

      res.status(201).send({ message: "New person successfully created", propietario })
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem", error })
    }
  },
  async getByNregistro(req, res) {
    try {
      const prop = await Propietario.findOne({})
        .populate({
          path: "loteId",
          match: { nRegistro: req.params.nRegistro } // Filtrar por nRegistro en Lote
        });

      if (!prop || !prop.loteId) {
        return res.status(404).send({ message: "Propietario no encontrado" });
      }

      res.status(200).send({ message: "Propietario encontrado", propietario: prop });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error en el servidor" });
    }
  },
  async update(req, res) {
    try {
      const prop = await Propietario.findOneAndUpdate(
        { dni: req.params.dni }, // Condición de búsqueda
        req.body, // Objeto con los datos a actualizar
        { new: true } // Para que devuelva el documento actualizado
      );

      res.send(prop);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = PropietarioController;