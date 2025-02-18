const Propietario = require("../models/Propietario");

const PropietarioController = {
  async getAll(req, res) {
    try {
      const propietario = await Propietario.find()
      .populate("faseId")
      res.send(propietario);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = PropietarioController;