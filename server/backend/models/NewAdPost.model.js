const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newAdPostSchema= new Schema({
    vehicalprice:{type:String},
    vehicalnegotiableprice:{type:Boolean},
    vehicalcondition:{type:String},
    brandname:{type:String},
    modelname:{type:String},
    bodytype:{type:String},
    vehicalmileage:{type:String},
    vehicalengine:{type:String},
    vehicalcolor:{type:String},
    vehicalmenufyear:{type:String},
    vehicalfuletype:{type:String},
    vehicaltransmission:{type:String},
    vehicaldriver:{type:String},
    vehicalaircon:{type:Boolean},
    vehicaldescription:{type:String},
    ownername:{type:String},
    owneremail:{type:String},
    ownercity:{type:String},
    ownerphonenumber:{type:String},
    // fileimage:{type:String}
    // selectedFile:{type:String}
    // fileimage:{type:String},
    
    
});

const new_ad_postMongo = mongoose.model('newadpost',newAdPostSchema);

module.exports= new_ad_postMongo;

