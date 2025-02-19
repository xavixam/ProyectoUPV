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
};

module.exports = PropietarioController;