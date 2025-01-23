const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const LoteSchema = new mongoose.Schema({
  nRegistro: String,
  carpeta_principal_id: String,
  observaciones: String,
  subCarpetas: [{ type: ObjectId, ref: "SubCarpeta" }],
  // subCarpetas: [],


  faseId: { type: ObjectId, ref: "Fase" }
  
}, { timestamps: true });

LoteSchema.index({
  nRegistro: "text",
});

const Lote = mongoose.model('Lote', LoteSchema);

module.exports = Lote;