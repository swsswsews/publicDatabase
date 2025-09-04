//get router
const express=require("express")
const router=express.Router()

/*routes*/
//user
const userRoutes=require("../routes/userRoutes/routes")
router.use("/user", userRoutes)

//database
/*======*/

//export
module.exports=router