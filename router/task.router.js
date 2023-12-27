const Router=require("express")
const verifyToken=require("../middleware/auth")
const isAdmin=require("../middleware/admin")
const {tasklist,find,createBy, taskform, taskitem, add,getitem, deleted,update,taskupdate} = require("../controlers/task.controlers")
const taskroute=Router()

taskroute.get("/task/taskitem",taskitem)
taskroute.get("/task/getitem",getitem)

taskroute.get("/task/taskform",taskform)
taskroute.post("/task/taskform",createBy)

taskroute.get("/task/tasklist",tasklist)

taskroute.post("/task/add",add)

taskroute.get("/task/find",find)
taskroute.delete("/task/delete:id",deleted)
taskroute.get("/task/logout")
taskroute.patch("/task/update/:id",update)
taskroute.get("/task/update/:id",taskupdate)

module.exports=taskroute