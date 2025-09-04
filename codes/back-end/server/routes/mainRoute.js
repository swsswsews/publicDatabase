//get router
const express=require("express")
const router=express.Router()

/*routes*/
//user
const userRoutes=require("./userRoute")
router.use("/user", userRoutes)

//database
const databaseRoutes=require("./databaseRoute")
router.use("/database", databaseRoutes)
/*======*/

//export
module.exports=router