var express = require("express");
var multer = require("multer");

var app = express();

var port = 3004;


// Multer DiskStorage
var storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null, './uploads');
    },
    filename:function(req,file,callback){
        callback(null,file.originalname);
    }
});


// multer file type validation
var upload = multer({
    storage:storage,
    fileFilter(req,file,callback){
        if(file.mimetype==="image/png" || file.mimetype==="image/jpg" || file.mimetype==="image/jpeg"){
            callback(null,true)
        }else{
            callback(new Error("Only .png and .jpg format allowed"))
        }
    },
}).single("myfile")


// error handling
app.post('/', function(req,res){
    upload(req,res,function(err){
        if(err){
            res.status(400).send({ error: err.message });
        }else{
            res.end("file upload successfully");
        }
    })
})

app.listen(port, () => {
    console.log("server run successfully");
  });

