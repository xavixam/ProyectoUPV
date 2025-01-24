const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  email: String,
  password: String,
  rol: String
  
}, { timestamps: true });


const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;