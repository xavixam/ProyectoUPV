const Padre = require("../models/Padre")

const LoteController = {
    
    async getAll(req, res) {
        try {
            const padre = await Padre.find()
            res.send(padre)
        } catch (error) {
            console.error(error);
        }
    },
    async create(req, res) {
        try {
            req.body.tipoId = req.tipo._id;   
            const padre = await Padre.create(req.body)

            res.status(201).send({ message: "Padre creado", padre })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Ha habido un problema", error })
        }
    },
    async getById(req, res) {
        try {
            const padre = await Padre.findById(req.params._id)
            .populate("fotosIds")
            .populate("tipoId")
            .populate("loteId")
            res.send(padre)
        } catch (error) {
            console.error(error);
        }
    },
}

module.exports = LoteController