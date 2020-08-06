const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postNewTruckSchema= new Schema({
    truckprice:{type:Number},
     trucknegotiableprice:{type:Boolean},
    truckcondition:{type:String},
    brandname:{type:String},
    modelname:{type:String},
    enginetype:{type:String},
    truckbodytype:{type:String},
    truckmileage:{type:String},

    truckcolor:{type:String},
    truckmenufyear:{type:String},
    truckfuletype:{type:String},
    trucktransmission:{type:String},
    truckdriver:{type:String},
    truckaircon:{type:Boolean},
    truckdescription:{type:String},
    truckownername:{type:String},
    truckowneremail:{type:String},
    truckownercity:{type:String},
    truckownerphonenumber:{type:Number},
    // selectedFile:{type:Array}
    
    
});

const post_new_truckMongo = mongoose.model('postnewtruck',postNewTruckSchema);

module.exports= post_new_truckMongo;

