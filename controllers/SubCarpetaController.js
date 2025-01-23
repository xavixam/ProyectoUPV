const SubCarpeta = require("../models/SubCarpeta")


const SubCarpetaController = {
    
    async getAll(req, res) {
        try {
            const subCarpeta = await SubCarpeta.find()
            res.send(subCarpeta)
        } catch (error) {
            console.error(error);
        }
    },
    async create(req, res) {
        try {
            const subcarpeta = await SubCarpeta.create(req.body)

            res.status(201).send({ message: "New type successfully created", subcarpeta })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error })
        }
    },
    async getById(req, res) {
        try {
            const subCarpeta = await SubCarpeta.findById(req.params._id)
            res.send(subCarpeta)
        } catch (error) {
            console.error(error);
        }
    },
}

module.exports = SubCarpetaController