const express = require("express");
const ProfileController = require("../controller/ProfileController")
const TodoController = require("../controller/TodoController")
const AuthVerify = require("../middleware/AuthVerify")

const router = express.Router();

// ===== Profile Section ========

//user registration
router.post("/CreateProfile", ProfileController.CreateProfile); 
//user login
router.post("/UserLogin", ProfileController.UserLogin);
// profile select
router.get("/SelectProfile",AuthVerify, ProfileController.SelectProfile);
// update profile
router.post("/UpdateProfile",AuthVerify, ProfileController.UpdateProfile);



// ===== TODO Section =========

// create todo
router.post("/CreateToDo",AuthVerify, TodoController.CreateToDo);
// select todo
router.get("/SelectToDo",AuthVerify, TodoController.SelectToDo);
// update todo
router.post("/UpdateToDo",AuthVerify, TodoController.UpdateToDo);
// update status todo
router.post("/UpdateStatusToDo",AuthVerify,TodoController.UpdateStatusToDo);
// remove todo
router.post("/RemoveToDo",AuthVerify,TodoController.RemoveToDo);
// select todo by status
router.post("/SelectToDoByStatus",AuthVerify,TodoController.SelectToDoByStatus);
// select todo by date
router.post("/SelectToDoByDate",AuthVerify,TodoController.SelectToDoByDate);



module.exports=router;




