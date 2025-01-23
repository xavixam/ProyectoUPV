const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;


const SubCarpetaSchema = new mongoose.Schema({
  id_subcarpeta: String, //id del drive
  nRegistro: String,
  tipo:String,
//   subcarpetas_internas: [{ type: ObjectId, ref: "SubCarpetaInterna" }],
  subcarpetas_internas: [],

  
}, { timestamps: true });

SubCarpetaSchema.index({
  nRegistro: "text",
});

const SubCarpeta = mongoose.model('SubCarpeta', SubCarpetaSchema);

module.exports = SubCarpeta;