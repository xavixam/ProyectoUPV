const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const SubCarpetaSchema = new mongoose.Schema({
  subCarpetaDriveId: String,
  nRegistro: String,
  tipo:String,
  
  
}, { timestamps: true });

SubCarpetaSchema.index({
  nRegistro: "text",
});

const SubCarpeta = mongoose.model('SubCarpeta', SubCarpetaSchema);

module.exports = SubCarpeta;