const mongoose=require("mongoose")

const taskSchema=new mongoose.Schema({
   img:String,
   title:String,
   categories:String,
   Description:String ,
   duedate:Number,
   createBy:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})

const task=mongoose.model("task",taskSchema)
module.exports=task