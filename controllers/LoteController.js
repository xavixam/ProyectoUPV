const Lote = require("../models/Lote")


const LoteController = {
    
    async getAll(req, res) {
        try {
            const lote = await Lote.find()
            res.send(lote)
        } catch (error) {
            console.error(error);
        }
    },
    async create(req, res) {
        try {
            const lote = await Lote.create(req.body)

            res.status(201).send({ message: "New type successfully created", lote })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error })
        }
    },
    
}

module.exports = LoteController