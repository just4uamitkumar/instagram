const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },


    password:{
        type:String,
        required:true
    },

    resetToken:String,
    expireToken:Date,

    pic:{
        type:String,
        default:"https://res.cloudinary.com/dh1io84r6/image/upload/v1603113217/download_h16vmz.png"
    },

    followers:[{type:ObjectId, ref:"User"}],
    following:[{type:ObjectId, ref:"User"}]
})

mongoose.model("User", userSchema)