const Lote = require("../models/Lote")
const SubCarpeta = require('../models/SubCarpeta');
const SubCarpetaInterna = require('../models/SubCarpetaInterna');

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
    async getById(req, res) {
        try {
            const { id } = req.params;
    
            // Buscar el Lote por su ID y hacer populate de las subCarpetas y subCarpetasInternas
            const lote = await Lote.findById(id)
                .populate({
                    path: 'subCarpetas', // Popular el array de subCarpetas
                    populate: {
                        path: 'subCarpetasInternas', // Popular las subCarpetasInternas dentro de cada subCarpeta
                        model: 'SubCarpetaInterna', // Asegúrate de que el modelo esté correctamente definido
                    },
                });
    
            // Si no se encuentra el lote, devolvemos un 404
            if (!lote) {
                return res.status(404).send({ message: "Lote no encontrado" });
            }
    
            res.status(200).send({ message: "Lote encontrado", lote });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Ha habido un problema", error });
        }
    }
}

module.exports = LoteController