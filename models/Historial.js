const mongoose = require('mongoose');

const HistorialSchema = new mongoose.Schema({
  nombreFase: String,
  dniTrabajador: String,
  fecha: Date,
  
}, { timestamps: true });


const Historial = mongoose.model('Historial', HistorialSchema);

module.exports = Historial;