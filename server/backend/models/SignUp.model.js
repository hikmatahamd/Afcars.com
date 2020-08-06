const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        },
    useremail:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        lowercase:true
    },
    userphonenumber:
    {
        type:Number
    },
    userpassword:
    {
        type:String,
        required:true
    },
    userconformpassword:
    {
        type:String
    },
    useragree:{
        type:Boolean ,
        
    },
 
})
module.exports=User=mongoose.model("user",userSchema);





