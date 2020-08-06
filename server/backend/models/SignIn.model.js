const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signInSchema= new Schema({
    username:{type:String,required:true},
    phoneNumber:{ type: Number, required:true },
    password:{ type:String ,required:true},
    check:{type:Boolean}
    
});

const sign_in = mongoose.model('signin',signInSchema);

module.exports= sign_in;

