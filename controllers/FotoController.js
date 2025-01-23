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
            // Crear la foto con los datos proporcionados en el cuerpo de la solicitud
            const foto = await Foto.create(req.body);
    
            // Actualizar la subCarpetaInterna correspondiente para agregar la foto creada a su array imgs
            await SubCarpetaInterna.findByIdAndUpdate(
                req.body.subCarpetaInternaId, // El ID de la subCarpetaInterna al que pertenece la foto
                { $push: { imgs: foto._id } }, // Agregar el ID de la foto al array imgs
                { new: true } // Devolver el documento actualizado (opcional, por si lo necesitas)
            );
    
            res.status(201).send({ message: "Foto creada y añadida a SubCarpetaInterna", foto });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Ha habido un problema", error });
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