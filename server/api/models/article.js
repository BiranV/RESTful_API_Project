const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,   //mongoose will generate a unique string 
    firstName: {
    type: String,
    require: true
    },
    lastName: { 
        type: String,
        require: true
        },
    age: {
        type: Number,
        require: true
        },
    gender: {
        type: String,
        require: true
        },
    image: {
        type: String,
        }

});

module.exports = mongoose.model("Article", articleSchema) //"User" is the name of the model and articleSchema is the schema