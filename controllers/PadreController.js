const Padre = require("../models/Padre")


const LoteController = {
    
    async getAll(req, res) {
        try {
            const padre = await Padre.find()
            res.send(padre)
        } catch (error) {
            console.error(error);
        }
    },
    
}

module.exports = LoteController