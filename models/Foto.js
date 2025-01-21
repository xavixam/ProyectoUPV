const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const FotoSchema = new mongoose.Schema({
  nRegistro: String,
  observaciones: String,
  padreId: { type: ObjectId, ref: "Padre" },
  idLote:{type: ObjectId, ref: "Lote"},
  img:String,
  comentarios:String,
  estado:String
  
}, { timestamps: true });

FotoSchema.index({
  nRegistro: "text",
});

const Foto = mongoose.model('Foto', FotoSchema);

module.exports = Foto;