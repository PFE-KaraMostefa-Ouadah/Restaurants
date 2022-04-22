const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    nom:{
        type : String,
        required : true
    },
    prenom:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    mdp:{
        type : String,
        required : true
    }
},{timestamps: true})

module.exports = mongoose.model("user",userSchema)