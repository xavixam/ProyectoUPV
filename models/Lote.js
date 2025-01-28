const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const LoteSchema = new mongoose.Schema({
  nRegistro: String,
  carpeta_principal_id: String,
  observaciones: String,//
  idResponsable:{ type: ObjectId, ref: "DniVerificado" },
  estado: String, //
  otros: String, //
  archivo: String,
  dmg:[], //
  subCarpetas: [],
  lugar:String, //
  faseId: { type: ObjectId, ref: "Fase" },
  nombrePropietario: String, //
  dniPropietario:String, //
  telefonoPropietario:String,//
  correoPropietario: String, //
  conPropietario: Boolean //
  
}, { timestamps: true });

LoteSchema.index({
  nRegistro: "text",
});

const Lote = mongoose.model('Lote', LoteSchema);

module.exports = Lote;