const { ObjectId } = require('mongodb');
const mongoose= require('mongoose');

const DrawingSchema=mongoose.Schema({
    "_id": ObjectId, 
    "name":String,
    "yearId" : String,
    "tools": Array,
    "filePath": String
});

module.exports=mongoose.model('Drawing',DrawingSchema);