const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,   //mongoose will generate a unique string 
        email: { 
        type: String, 
        require: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ 
    },
    password: { 
        type: String, 
        require: true
    } 

});

module.exports = mongoose.model("UserAPI", userSchema) //"User" is the name of the model and articleSchema is the schema