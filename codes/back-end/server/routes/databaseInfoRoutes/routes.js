//load express router
const express=require("express")
const router=express.Router()

const controller=require("../../controllers/createDatabaseController")

/*routes*/

//create database
router.post("/createDatabase", controller.createDatabase)

//update database
router.put("/updateDatabase",controller.updateDatabase)

//delete database
router.delete("/deleteDatabase",controller.deleteDatabase)

//get information in database
router.get("/getDatabaseInfo",controller.getDatabaseInfo)

/*======*/

//export
module.exports=router