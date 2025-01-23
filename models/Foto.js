const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const FotoSchema = new mongoose.Schema({
  nombre: String,
  observaciones: String,
  subCarpetaInternaId: { type: ObjectId, ref: "SubCarpetaInterna" },
  loteId: {type: ObjectId, ref: "Lote"},
  img:String,
  comentarios:String,
  estado:String
  
}, { timestamps: true });

FotoSchema.index({
  nRegistro: "text",
});

const Foto = mongoose.model('Foto', FotoSchema);

module.exports = Foto;