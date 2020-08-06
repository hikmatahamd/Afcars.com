const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postNewBikeSchema= new Schema({
    bikeprice:{type:Number},
     bikenegotiableprice:{type:Boolean},
    bikecondition:{type:String},
    brandname:{type:String},
    modelname:{type:String},
    enginetype:{type:String},
    bikeengine:{type:String},
    bikemileage:{type:String},

    bikecolor:{type:String},
    bikemenufyear:{type:String},
    bikeantitheftlockfeature:{type:Boolean},
    bikediscbrakefeature:{type:Boolean},
    bikeledlightfeature:{type:Boolean},
    bikewindshieldfeature:{type:Boolean},
    bikedescription:{type:String},
    bikeownername:{type:String},
    bikeowneremail:{type:String},
    bikeownercity:{type:String},
    bikeownerphonenumber:{type:Number},
    // selectedFile:{type:Array}
    
    
});

const post_new_bikeMongo = mongoose.model('postnewbike',postNewBikeSchema);

module.exports= post_new_bikeMongo;

