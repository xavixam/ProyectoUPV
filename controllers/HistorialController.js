const Historial = require("../models/Historial")


const HistorialController = {
    
    async getAll(req, res) {
        try {
            const historial = await Historial.find()
            res.send(historial)
        } catch (error) {
            console.error(error);
        }
    },
    
}

module.exports = HistorialController