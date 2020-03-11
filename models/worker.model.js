const mongoose = require('mongoose');
const uniqueVal = require("mongoose-unique-validator");

const workerSchema = mongoose.Schema({
  
phone : {type:String, required: true, unique: true},
password : {type:String, required: true},
hourlyRate: {type:Number, required:true},
imagePath: {type: String,require:false},

});

workerSchema.plugin(uniqueVal);

module.exports = mongoose.model('Worker', workerSchema);