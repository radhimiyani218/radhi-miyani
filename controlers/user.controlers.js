const user = require("../models/user.schema")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const signup = async (req, res) => {
   let data = await user.findOne({ email: req.body.email });
   if (data) {
     return res.send({ message: "already exists" });
   } else {
     let { username, email, password ,role} = req.body;
     bcrypt.hash(password, 5, async (err, hash) => {
       if (err) {
         res.send({ message: "valid" });
       } else {
         let obj = {
           username: username,
           password: hash,
           email: email,
           role:role
         };
         let data = await user.create(obj);
         res.send({ message: "valid", val: data });
       }
     });
   }
 };

const usersignup=async(req,res)=>{
   res.render("signup")
}

const login = async (req, res) => {
   let { email, password } = req.body;
   let data = await user.findOne({ email: email });
   if (data) {
     bcrypt.compare(password, data.password, (err, result) => {
       if (result) {
         let token = jwt.sign({ id: data._id, role: data.role }, "token");
         res.cookie("token", token).send({ message: "successfully login" });
       } else {
         res.send("not found");
       }
     });
   } else {
     res.redirect("/login");
   }
 };

const userlogin=async(req,res)=>{
   res.render("login")
}

const users = async (req, res) => {
  res.send({ msg: "cheking token" });
};

module.exports={userlogin,signup,usersignup,login,users}