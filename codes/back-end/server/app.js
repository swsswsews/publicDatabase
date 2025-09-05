//load module
const express=require("express")
const app=express()

const multer = require("multer");
const upload = multer();

const listener=require("./listener")

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(upload.none())

//routes
const routes=require("./routes/mainRoute")
app.use("/publicDatabase", routes)

//listener
listener.listen(app)