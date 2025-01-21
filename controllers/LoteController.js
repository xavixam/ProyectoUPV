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
    
}

module.exports = LoteController