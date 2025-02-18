const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PropietarioSchema = new mongoose.Schema({
  nombre: String,
  dni: String,
  lugar: String,
  email: String,
  tel: Number,
  loteId: { type: ObjectId, ref: "Lote" },
  
}, { timestamps: true });

PropietarioSchema.index({
  nombre: "text",
});

const Propietario = mongoose.model('Propietario', PropietarioSchema);

module.exports = Propietario;