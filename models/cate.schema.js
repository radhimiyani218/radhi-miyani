const mongoose=require("mongoose")

const cateSchema=new mongoose.Schema({
    gender:String
})

const cate=mongoose.model("cate",cateSchema)
module.exports=cate