const { ObjectId } = require('mongodb');
const mongoose= require('mongoose');

const PhotoSchema=mongoose.Schema({
    _id:ObjectId,
    name: String,
    season: ObjectId,
    typeIds:Array,
    tools:Array,
    filePath:String
});

module.exports=mongoose.model('Photos',PhotoSchema);