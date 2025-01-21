const Fase = require("../models/Fase")


const FaseController = {
    
    async getAll(req, res) {
        try {
            const fase = await Fase.find()
            res.send(fase)
        } catch (error) {
            console.error(error);
        }
    },
    
}

module.exports = FaseController