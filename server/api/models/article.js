const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,   //mongoose will generate a unique string 
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
    email: String,
    password: String,
    image: String

});

module.exports = mongoose.model("Article", articleSchema) //"User" is the name of the model and articleSchema is the schema