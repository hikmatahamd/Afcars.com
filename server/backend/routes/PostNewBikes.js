const router =require('express').Router();
// const multer = require('multer');
//store all files in uploads folder
// const upload =multer({dest: 'uploads/'});

let postNewBike=require('../models/PostNewBike.model');
router.route('/').get((req,res) => {
    postNewBike.find() // find method get all the users( posted ads that we have added before) from the mongoDB 
    .then(postnewbike=>res.json(postnewbike)) //we are returning some thing in json format and what we return is all the users ( posted ads that we hace posted before)from the database
    .catch(err => res.status(400).json('Error :' + err));
});

            router.route('/new-bike-add').post((req,res)=>{
            const bikeprice=req.body.bikeprice;
            const bikenegotiableprice=req.body.bikenegotiableprice;
            const bikecondition=req.body.bikecondition;
            const brandname=req.body.brandname;
            const modelname=req.body.modelname;
            const enginetype=req.body.enginetype;
            const bikemileage=req.body.bikemileage;
            const bikecolor=req.body.bikecolor;
            const bikemenufyear=req.body.bikemenufyear;
            const bikeantitheftlockfeature=req.body.bikeantitheftlockfeature;
            const bikediscbrakefeature=req.body.bikediscbrakefeature;
            const bikeledlightfeature=req.body.bikeledlightfeature;
            const bikewindshieldfeature=req.body.bikewindshieldfeature;
            const bikedescription=req.body.bikedescription;
            const bikeownername=req.body.bikeownername;
            const bikeowneremail=req.body.bikeowneremail;
            const bikeownercity=req.body.bikeownercity;
            const bikeownerphonenumber=req.body.bikeownerphonenumber;
            //    const selectedFile=req.body.selectedFile;
                
    
            const post_new_bike = new postNewBike({
                    bikeprice,
                    bikenegotiableprice,  
                    bikecondition,
                    brandname,
                    modelname,
                    bikemileage,
                    enginetype,
                    bikecolor,
                    bikemenufyear,
                    bikeantitheftlockfeature,
                    bikediscbrakefeature,
                    bikeledlightfeature,
                    bikewindshieldfeature,
                    bikedescription,
                    bikeownername,
                    bikeowneremail,
                    bikeownercity,
                    bikeownerphonenumber,
                    // selectedFile
            });
            post_new_bike.save()
            .then(()=>res.json('record added!'))
            .catch(err => res.status(400).json('Error : ' + err));
        });
module.exports=router; 