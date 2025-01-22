const DniVerificado = require("../models/DniVerificado")


const DniVerificadoController = {
    
    async getAll(req, res) {
        try {
            const dniVerificado = await DniVerificado.find()
            res.send(dniVerificado)
        } catch (error) {
            console.error(error);
        }
    },
    async create(req, res) {
        try {
            const dni = await DniVerificado.create(req.body)

            res.status(201).send({ message: "New type successfully created", dni })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error })
        }
    },
    
}

module.exports = DniVerificadoController