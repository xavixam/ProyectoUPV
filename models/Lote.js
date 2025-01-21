const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const LoteSchema = new mongoose.Schema({
  nRegistro: String,
  observaciones: String,
  contenidoIds: [{ type: ObjectId, ref: "Padre" }],
  faseId: { type: ObjectId, ref: "Fase" }
  
}, { timestamps: true });

LoteSchema.index({
  nRegistro: "text",
});

const Lote = mongoose.model('Lote', LoteSchema);

module.exports = Lote;