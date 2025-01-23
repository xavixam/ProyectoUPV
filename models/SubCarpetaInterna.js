const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const SubCarpetaInternaSchema = new mongoose.Schema({
  
  imagenes: [{type: ObjectId, ref: "Foto"}],
  subcarpetas_internas_id: String,
  nRegistro: String,
  tipo:String,
  
}, { timestamps: true });

SubCarpetaInternaSchema.index({
  nRegistro: "text",
});

const SubCarpetaInterna = mongoose.model('SubCarpetaInterna', SubCarpetaInternaSchema);

module.exports = SubCarpetaInterna;