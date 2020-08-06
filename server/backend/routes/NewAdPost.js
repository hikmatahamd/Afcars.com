const router =require('express').Router();
var express=require('express');


var path=require('path');
const multer = require('multer');
const mongoose=require("mongoose");

router.use(express.static(__dirname+"./backend/uploads/"));


let newAdPost=require('../models/NewAdPost.model');
//getting all post from the database 
router.route('/').get((req,res) => {
    newAdPost.find() // find method get all the users( posted ads that we have added before) from the mongoDB 
    .then(newadpost=>res.json(newadpost)) //we are returning some thing in json format and what we return is all the users ( posted ads that we hace posted before)from the database
    .catch(err => res.status(400).json('Error :' + err));
});


//getting single post from the database by postid 

router.route('/:id',async(req ,res)=>{
   try {
    const post = await newAdPost.findById(req.params.id);
    res.status(200).json({
        status:'success',
       data:post
    })
    
   } catch(err){
    res.status(404).json({
        status:'fail',
        message:err
    });
   }
});
router.get("/new-add_by_id",(req,res)=>{
    let type =req.query.type
    let newAdId=req.query.id
    if(type==="array"){
        
    }
    newAdPost.find({ '_id':{$in:newAdId}})
    .populate('writter')
    .exec((err,newadpost)=>{
        if(err) return req.status(400).send(err)
        return res.status(200).send(newadpost)
    })

});


// router.get("/",async (req,res)=>{
//   const newadpost = await newAdPost.findById(req.user);
//   // res.json(user);
//   res.json({
//     username:user.username,
//     id:user._id,
//   })

// })
router.route('/new-add').post((req,res)=>{
    // router.post('/new-add',upload.single('myImage'),(req,res,next)=>{
      
   const vehicalprice=req.body.vehicalprice;
   const vehicalnegotiableprice=req.body.vehicalnegotiableprice; 
   
   const vehicalcondition=req.body.vehicalcondition;
   const brandname=req.body.brandname;
   const modelname=req.body.modelname;
   const bodytype=req.body.bodytype;
   const vehicalmileage=req.body.vehicalmileage;
   const vehicalengine=req.body.vehicalengine;
   const vehicalcolor=req.body.vehicalcolor;
   const vehicalmenufyear=req.body.vehicalmenufyear;
   const vehicalfuletype=req.body.vehicalfuletype;
   const vehicaltransmission=req.body.vehicaltransmission;
   const vehicaldriver=req.body.vehicaldriver;
   const vehicalaircon=req.body.vehicalaircon;
   const vehicaldescription=req.body.vehicaldescription;
   const ownername=req.body.ownername;
   const owneremail=req.body.owneremail;
   const ownercity=req.body.ownercity;
   const ownerphonenumber=req.body.ownerphonenumber;
//    const myimage=req.file.myimage;

//    const selectedFile=req.body.selectedFile;
  const myimage=req.bodytype.file;

    const new_ad_post = new newAdPost({
        vehicalprice,
        vehicalnegotiableprice,  
            vehicalcondition,
            brandname,
            modelname,
            bodytype,
            vehicalmileage,
            vehicalengine,
            vehicalcolor,
            vehicalmenufyear,
            vehicalfuletype,
            vehicaltransmission,
            vehicaldriver,
            vehicalaircon,
            vehicaldescription,
            ownername,
            owneremail,
            ownercity,
            ownerphonenumber,
            // selectedFile,
            // selectedFile
            myimage,
    });
    new_ad_post.save()
    .then(()=>res.json('record added!'))
    .catch(err => res.status(400).json('Error : ' + err));
});
module.exports=router; 