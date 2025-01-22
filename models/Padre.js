const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PadreSchema = new mongoose.Schema({
  fotosIds: [{ type: ObjectId, ref: "Foto" }],
  tipoId: { type: ObjectId, ref: "Tipo" },
  fotoseta: String,
  loteId: { type: ObjectId, ref: "Lote" },  
  master: [], // dos fotos de amberso y reverso del album puede ser null
}, { timestamps: true });

PadreSchema.index({
  etiqueta: "text",
});

const Padre = mongoose.model('Padre', PadreSchema);

module.exports = Padre;