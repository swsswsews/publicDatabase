//load express router
const express=require("express")
const router=express.Router()

const controller=require("../controllers/createDatabaseController")

/*routes*/

//create database
router.use("/createDatabase",controller.createDatabase)

//update database
router.use("/updateDatabase",controller.updateDatabase)

//delete database
router.use("/deleteDatabase",controller.deleteDatabase)

//get information in database
router.use("/getDatabaseInfo",controller.getDatabaseInfo)

/*======*/

//export
module.exports=router