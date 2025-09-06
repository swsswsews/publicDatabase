//load express
const express=require("express")
const router=express.Router()

//load controllers
const controllers=require("../../controllers/users")

//routes
router.post("/register", controllers.registerUser)
router.get("/login", controllers.loginUser)
router.delete("/delete", controllers.deleteUser)
router.put("/update", controllers.updateUser)

//export
module.exports=router