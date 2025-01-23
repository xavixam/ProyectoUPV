const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const SubCarpetaInternaSchema = new mongoose.Schema({
  
  imgs: [{type: ObjectId, ref: "Foto"}],
  subCarpetaInternaDriveId: String,
  nRegistro: String,
  tipo:String,
  
  
}, { timestamps: true });

SubCarpetaInternaSchema.index({
  nRegistro: "text",
});

const SubCarpetaInterna = mongoose.model('SubCarpetaInterna', SubCarpetaInternaSchema);

module.exports = SubCarpetaInterna;