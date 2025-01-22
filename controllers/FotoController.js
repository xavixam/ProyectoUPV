const Foto = require("../models/Foto")

const FotoController = {
    
    async getAll(req, res) {
        try {
            const foto = await Foto.find()
            .populate("userId")
            .populate("loteId")
            res.send(foto)
        } catch (error) {
            console.error(error);
        }
    },
    async create(req, res) {
        try {
            req.body.padreId = req.padre._id;   
            const foto = await Foto.create(req.body)

            res.status(201).send({ message: "Foto creada", foto })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Ha habido un problema", error })
        }
    },
    async getById(req, res) {
        try {
            const foto = await Foto.findById(req.params._id)
            .populate("padreId") 
            .populate("loteId");
            res.send(foto)
        } catch (error) {
            console.error(error);
        }
    },
}

module.exports = FotoController