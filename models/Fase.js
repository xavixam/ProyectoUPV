const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const FaseSchema = new mongoose.Schema({
  nombre: String,
  terminado: Boolean,
  trabajadorId: { type: ObjectId, ref: "DniVerificado" },
  descripcion: String,
  loteId: { type: ObjectId, ref: "Lote" },
  fecha : Date
  
}, { timestamps: true });

FaseSchema.index({
  nombre: "text",
});

const Fase = mongoose.model('Fase', FaseSchema);

module.exports = Fase;