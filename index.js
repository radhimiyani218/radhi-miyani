const express=require("express")
const router=require("./router/user.router")
const task=require("./router/task.router")
const connection=require("./config/db")
const cookie=require("cookie-parser")
const taskroute = require("./router/task.router")
const app=express()
app.use(express.json())
app.use(router)
app.use(taskroute)

app.set("view engine","ejs")
app.set("views",__dirname+"/views")
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))


app.listen(8090,()=>{
    console.log("listening on part 8090");
    connection()
    
})