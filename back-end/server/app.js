//load module
const express=require("express")
const app=express()

const listener=require("./listener")

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
const routes=require("./routes/mainRoute")
app.use("/publicDatabase", routes)

//listener
listener.listen()