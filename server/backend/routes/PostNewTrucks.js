const router =require('express').Router();


let postNewTruck=require('../models/PostNewTruck.model');
router.route('/').get((req,res) => {
    postNewTruck.find() // find method get all the users( posted ads that we have added before) from the mongoDB 
    .then(postnewtruck=>res.json(postnewtruck)) //we are returning some thing in json format and what we return is all the users ( posted ads that we hace posted before)from the database
    .catch(err => res.status(400).json('Error :' + err));
});

            router.route('/new-truck-add').post((req,res)=>{
            const truckprice=req.body.truckprice;
            const trucknegotiableprice=req.body.trucknegotiableprice;
            const truckcondition=req.body.truckcondition;
            const brandname=req.body.brandname;
            const modelname=req.body.modelname;
            const enginetype=req.body.enginetype;
            const truckmileage=req.body.truckmileage;
            const truckcolor=req.body.truckcolor;
            const truckmenufyear=req.body.truckmenufyear;
            const truckfuletype=req.body.truckfuletype;
            const truck=req.body.truckfuletype;
            const trucktransmission=req.body.trucktransmission;
            const truckdriver=req.body.truckdriver;
            const truckaircon=req.body.truckaircon;
            const truckownername=req.body.truckownername;
            const truckowneremail=req.body.truckowneremail;
            const truckownercity=req.body.truckownercity;
            const truckownerphonenumber=req.body.truckownerphonenumber;
            //    const selectedFile=req.body.selectedFile;
                
    
            const post_new_truck = new postNewTruck({
                    truckprice,
                    trucknegotiableprice,  
                    truckcondition,
                    brandname,
                    modelname,
                    truckmileage,
                    enginetype,
                    truckcolor,
                    truckmenufyear,
                    truckfuletype,
                    trucktransmission,
                    truckdriver,
                    truckaircon,
                    truckdescription,
                    truckownername,
                    truckowneremail,
                    truckownercity,
                    truckownerphonenumber,
                    // selectedFile
            });
            post_new_truck.save()
            .then(()=>res.json('record added!'))
            .catch(err => res.status(400).json('Error : ' + err));
        });
module.exports=router; 