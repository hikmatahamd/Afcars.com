var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
app.use(cors())
const router =require('express').Router();
router.use(express.static(__dirname+"./uploads/"));

var storage = multer.diskStorage({
   destination: function (req, file, cb) {
   cb(null, 'public')
 },
 filename: function (req, file, cb) {
   cb(null, Date.now() + '-' +file.originalname )
 }
})
var upload = multer({ storage: storage }).single('file')

router.post('/upload',function(req, res) {
   //  router.post('/new-add',(req,res)=>{
     
   upload(req, res, function (err) {
          if (err instanceof multer.MulterError) {
              return res.status(500).json(err)
          } else if (err) {
              return res.status(500).json(err)
          }
     return res.status(200).send(req.file)

   })

});