

/*
    # song model
    # use to create new song in db
*/



const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    title: {type:String, required: true},
    category : {type:String},
    description: {type: String},
    creator: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
});

module.exports = mongoose.model('Job', jobSchema);