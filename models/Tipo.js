const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const TipoSchema = new mongoose.Schema({
  id: String,
  nombre: String,
  
}, { timestamps: true });

const Tipo = mongoose.model('Tipo', TipoSchema);

module.exports = Tipo;