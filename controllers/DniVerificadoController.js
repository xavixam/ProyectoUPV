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
    
}

module.exports = DniVerificadoController