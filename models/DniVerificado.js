const mongoose = require('mongoose');

const DniVerificadoSchema = new mongoose.Schema({
  dni: String,
  nombre: String,
  email: String,
  tel: Number,
  
}, { timestamps: true });


const DniVerificado = mongoose.model('DniVerificado', DniVerificadoSchema);

module.exports = DniVerificado;