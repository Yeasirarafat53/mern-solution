const TodoModel = require("../models/TodoModel");


// create todo 
exports.CreateToDo=(req,res)=>{
    let reqBody=req.body;

     let TodoSubject=reqBody['TodoSubject']
     let TodoDescription=reqBody['TodoDescription']
     let UserName=req.headers['username']
     let TodoStatus="New"
     let TodoCreateDate=Date.now();
     let TodoUpdateDate=Date.now();

    let PostBody={
        UserName:UserName,
        TodoSubject:TodoSubject,
        TodoDescription:TodoDescription,
        TodoStatus:TodoStatus,
        TodoCreateDate:TodoCreateDate,
        TodoUpdateDate:TodoUpdateDate
    }

    TodoModel.create(PostBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

// select todo
exports.SelectToDo=(req,res)=>{
    let UserName=req.headers['username']
    TodoModel.find({UserName:UserName},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

// update todo
exports.UpdateToDo=(req,res)=>{

    let TodoSubject=req.body['TodoSubject']
    let TodoDescription=  req.body['TodoDescription']
    let _id=  req.body['_id']
    let TodoUpdateDate=Date.now();

    let PostBody={
        TodoSubject:TodoSubject,
        TodoDescription:TodoDescription,
        TodoUpdateDate:TodoUpdateDate,
    }

    TodoModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })

}

// update todo by status
exports.UpdateStatusToDo=(req,res)=>{

    let TodoStatus=req.body['TodoStatus']
    let _id=  req.body['_id']
    let TodoUpdateDate=Date.now();

    let PostBody={
        TodoStatus:TodoStatus,
        TodoUpdateDate:TodoUpdateDate,
    }

    TodoModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })

}

// remove todo
exports.RemoveToDo=(req,res)=>{

    let _id=  req.body['_id']

    TodoModel.remove({_id:_id},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

// select todo by status
exports.SelectToDoByStatus=(req,res)=>{
    let UserName=req.headers['username']
    let TodoStatus=  req.body['TodoStatus']
    TodoModel.find({UserName:UserName,TodoStatus:TodoStatus},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

// select todo by date
exports.SelectToDoByDate=(req,res)=>{
    let UserName=req.headers['username']
    let FormDate=  req.body['FormDate']
    let ToDate=  req.body['ToDate']

    TodoModel.find({UserName:UserName,TodoCreateDate:{$gte:new Date(FormDate),$lte:new Date(ToDate)}},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}








