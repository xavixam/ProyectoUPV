const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PadreSchema = new mongoose.Schema({
  tipoId: { type: ObjectId, ref: "Tipo" }, //2
  etiqueta: String,
  loteId: { type: ObjectId, ref: "Lote" },
  master: [], // dos fotos de amberso y reverso del album puede ser null
  interior:[{ type: ObjectId, ref: "Foto" }],
  digitalizadas:[{ type: ObjectId, ref: "Foto" }],
  retocadas:[{ type: ObjectId, ref: "Foto" }],
}, { timestamps: true });

PadreSchema.index({
  etiqueta: "text",
});

const Padre = mongoose.model('Padre', PadreSchema);

module.exports = Padre;