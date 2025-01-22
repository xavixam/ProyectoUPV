const Tipo = require("../models/Tipo")

const TipoController = {
    
    async getAll(req, res) {
        try {
            const tipo = await Tipo.find()
            res.send(tipo)
        } catch (error) {
            console.error(error);
        }
    },
    async create(req, res) {
        try {
            const tipo = await Tipo.create(req.body)

            res.status(201).send({ message: "New type successfully created", tipo })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error })
        }
    },
    async getById(req, res) {
        try {
            const tipo = await Tipo.findById(req.params._id)
            res.send(tipo)
        } catch (error) {
            console.error(error);
        }
    },
}

module.exports = TipoController