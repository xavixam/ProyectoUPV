const Tipo = require("../models/Tipo")


const TipoController = {
    
    async getAll(req, res) {
        try {
            const tipo = await Tipo.find()
            res.send(tipo)
        } catch (error) {
            console.error(error);
        }
    },
    
}

module.exports = TipoController