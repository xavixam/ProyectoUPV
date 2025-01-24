const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;


const SubCarpetaSchema = new mongoose.Schema({
  id_subcarpeta: String, //id del drive
  nRegistro: String,
  tipo:String,
  subCarpetasInternas: [],

  
}, { timestamps: true });

SubCarpetaSchema.index({
  nRegistro: "text",
});
SubCarpetaSchema.index({
  id_subcarpeta: "text",
});



const SubCarpeta = mongoose.model('SubCarpeta', SubCarpetaSchema);

module.exports = SubCarpeta;