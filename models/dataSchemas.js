const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  animalName: { type: String, require: true },
  headLine: { type: String, require: true },
  image: { type: String, require: true },
  character: { type: Array },
  about:{type:String,require:true},
  habitat:{type:String,require:true},
  prey:{type:String,require:true}
});

const Data=mongoose.model("Data",dataSchema);

module.exports={Data};