const Historial = require("../models/Historial")
const DniVerificado = require("../models/DniVerificado")


const HistorialController = {
    
    async getAll(req, res) {
        try {
            const historial = await Historial.find()
            res.send(historial)
        } catch (error) {
            console.error(error);
        }
    },
    async create(req, res) {
        try {
            const { dni, nombreFase, fecha } = req.body; // Extraer datos del cuerpo de la petición
    
            // Buscar el trabajador por dni
            const trabajador = await DniVerificado.findOne({ dni });
            if (!trabajador) {
                return res.status(404).send({ message: "Trabajador no encontrado con el dni proporcionado" });
            }
    
            // Crear un nuevo historial con el _id del trabajador encontrado
            const historial = await Historial.create({
                nombreFase,
                trabajadorId: trabajador._id,
                fecha,
            });
    
            res.status(201).send({ message: "New historial successfully created", historial });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error });
        }
    },
    async getById(req, res) {
        try {
            const historial = await Historial.findById(req.params._id)
            .populate("trabajadorId")
            res.send(historial)
        } catch (error) {
            console.error(error);
        }
    },
}

module.exports = HistorialController