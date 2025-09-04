//get router
const express=require("express")
const router=express.Router()

/*routes*/
//user
router.use("/user", userRoutes)

//database
router.use("/database", databaseRoutes)
/*======*/

//export
module.exports=router