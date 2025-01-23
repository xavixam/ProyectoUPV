const SubCarpetaInterna = require("../models/SubCarpetaInterna")


const SubCarpetaInternaController = {
    
    async getAll(req, res) {
        try {
            const subCarpetaInterna = await SubCarpetaInterna.find()
            res.send(subCarpetaInterna)
        } catch (error) {
            console.error(error);
        }
    },
    async create(req, res) {
        try {
            const subCarpetaInterna = await SubCarpetaInterna.create(req.body)

            res.status(201).send({ message: "New type successfully created", subCarpetaInterna })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error })
        }
    },
    async getById(req, res) {
        try {
            const subCarpetaInterna = await SubCarpetaInterna.findById(req.params._id)
            res.send(subCarpetaInterna)
        } catch (error) {
            console.error(error);
        }
    },
}

module.exports = SubCarpetaInternaController