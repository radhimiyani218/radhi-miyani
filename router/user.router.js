const Router=require("express")
const { userlogin, usersignup, login, signup, users } = require("../controlers/user.controlers")
const verifyToken=require("../middleware/auth")
const router=Router()

router.get("/user/signup",usersignup)
router.post("/user/signup",signup)
router.post("/user/login",login)
router.get("/user/login",userlogin)
router.get("/user/users",verifyToken,users)

module.exports=router