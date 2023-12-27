const task=require("../models/task.schema")

const find=async(req,res)=>{
   try{
       let data=await task.find()
       res.send(data)
   }
   catch(error){
       res.status(404).send(error.message)
   }
}
const add = async (req, res) => {
   const { id } = req.cookies;
   let data = await task.findById(id);
   const { title, duedate, image, category,Description } = req.body;
   const addtask = {
     title: title,
     duedate,duedate,
     image: image,
     category: category,
     Description:Description
   };
   try {
     const data = await blog.create(addtask);
     res.send(data)
   } catch (error) {
     return res.send(error.message);
   }
 };

const createBy=async(req,res)=>{
   req.body.createBy=req.user.id
   let data =await task.create(req.body)
   res.send(data)
}

const taskform=async(req,res)=>{
   res.render("taskform")
}

const tasklist=async(req,res)=>{
   res.render("tasklist")
}

const taskitem=async(req,res)=>{
   const {id} = req.user.id
   console.log(id); 
   let data=await task.find({createBy:id})
   res.send(data)
}

const getitem=(req,res)=>{
   res.render("taskitem")
}

const deleted=async(req,res)=>{
   const {id}=req.params
   const data=await task.findByIdAndDelete(id)
   res.send(data)
}

const taskupdate = async (req, res) => {
       let {id} = req.params;
       let data = await task.findById(id)
       res.send(data);
}
const update = async(req,res)=>{
       let {id} = req.params;
       let data= await task.findByIdAndUpdate(req.body,id)
       res.send(data)
}

 module.exports={find,createBy,taskform,tasklist,taskitem,add,getitem,deleted,update,taskupdate}