const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;


const HistorialSchema = new mongoose.Schema({
  nombreFase: String,
  trabajadorId: { type: ObjectId, ref: "DniVerificado" },
  fecha: Date,
  
}, { timestamps: true });


const Historial = mongoose.model('Historial', HistorialSchema);

module.exports = Historial;