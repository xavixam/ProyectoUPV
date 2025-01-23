const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const LoteSchema = new mongoose.Schema({
  nRegistro: String,
  carpeta_principal_id: String,
  observaciones: String,
  // contenidoIds: [{ type: ObjectId, ref: "Padre" }],
  subCarpetas: [{ type: ObjectId, ref: "SubCarpeta" }],
  // restauradas:[{type: ObjectId,ref: "Foto"}],

  faseId: { type: ObjectId, ref: "Fase" }
  
}, { timestamps: true });

LoteSchema.index({
  nRegistro: "text",
});

const Lote = mongoose.model('Lote', LoteSchema);

module.exports = Lote;