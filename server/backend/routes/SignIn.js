const router =require('express').Router();
let signIn=require('../models/SignIn.model');


router.route('/').get((req,res) => {
    signIn.find() // find method get all the users( posted ads that we have added before) from the mongoDB 
    .then(sign_in=>res.json(sign_in)) //we are returning some thing in json format and what we return is all the users ( posted ads that we hace posted before)from the database
    .catch(err => res.status(400).json('Error :' + err));
}); 


router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const phoneNumber=req.body.phoneNumber;
    const password=req.body.password;
    const check=req.body.check;
    
    const sign_in = new signIn({
        username,
        phoneNumber,
        password,
        check
    });
    sign_in.save()
    .then(()=>res.json('record added!'))
    .catch(err => res.status(400).json('Error : ' + err));
});
module.exports=router; 