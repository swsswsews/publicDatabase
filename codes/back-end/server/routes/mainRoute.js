//get router
const express=require("express")
const router=express.Router()

/*routes*/

//user
const userRoutes=require("../routes/userRoutes/routes")
router.use("/user", userRoutes)

//database
const databaseInfoRoutes=require("../routes/databaseInfoRoutes/routes")
router.use("/databaseInfo", databaseInfoRoutes)
/*======*/

//export
module.exports=router