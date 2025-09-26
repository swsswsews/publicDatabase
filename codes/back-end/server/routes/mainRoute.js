//get router
const express=require("express")
const router=express.Router()

/*routes*/

//user
const userRoutes=require("../routes/userRoutes/routes")
router.use("/user", userRoutes)

//database
const databaseRoutes=require("../routes/databaseRoute")
router.use("/database", databaseRoutes)
/*======*/

//export
module.exports=router