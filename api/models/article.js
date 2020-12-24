const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,   //mongoose will generate a unique string 
    title: { type: String, require: true },
    description: { type: String, require: true },
    content: { type: String, require: true }
});

module.exports = mongoose.model("Article", articleSchema) //"Article" is the name of the model and articleSchema is the schema