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
            const { _id } = req.params;
    
            // Buscar el Lote por su ID y hacer populate de las subCarpetas y subCarpetasInternas
            const lote = await Lote.findById(_id);
    
            // Si no se encuentra el lote, devolvemos un 404
            if (!lote) {
                return res.status(404).send({ message: "Lote no encontrado" });
            }
            const loteObject = lote.toObject();
            // Enriquecer la información de las subcarpetas con los datos de SubCarpeta
    
            const infoSubCarpetas = await Promise.all(
                lote.subCarpetas.map(async (subcarpetaId) => {
                    // Buscar cada subcarpeta por su id_subcarpeta
                    const subcarpeta = await SubCarpeta.findOne({ id_subcarpeta: subcarpetaId });
                    if (subcarpeta) {
                        return {
                            id_subcarpeta: subcarpeta.id_subcarpeta,
                            nRegistro: subcarpeta.nRegistro,
                            tipo: subcarpeta.tipo,
                            subCarpetasInternas: subcarpeta.subCarpetasInternas,
                        };
                    } else {
                        return { id_subcarpeta: subcarpetaId, message: "Subcarpeta no encontrada" };
                    }
                })
            );
    
            // Añadir la información de las subcarpetas al lote
            loteObject.infoSubCarpetas = infoSubCarpetas;
    
            res.status(200).send({ message: "Lote encontrado", lote: loteObject });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Ha habido un problema", error });
        }
    }
    
}

module.exports = LoteController