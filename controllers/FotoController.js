const Foto = require("../models/Foto")


const FotoController = {
    
    async getAll(req, res) {
        try {
            const foto = await Foto.find()
            res.send(foto)
        } catch (error) {
            console.error(error);
        }
    },
    
}

module.exports = FotoController