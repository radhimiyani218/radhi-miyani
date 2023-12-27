
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const user = require("../models/user.schema");

const signup = async (req, res) => {
  const { username, email, password, role } = req.body
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            let finddata = await user.findOne({ email })
            if (!finddata) {
                let data = await user.create({
                    username: username,
                    email: email,
                    password: hash,
                    role: role
                })
                let token = jwt.sign({ id: data._id, role: data.role }, "token")
                res.cookie("token", token).send(data)
            }
            else {
                res.send("already exits")
            }
        })
    }
    catch (error) {
        res.send({ error: "not valid" })
    }
}


const usersignup = async (req, res) => {
  res.render("signup")
}

const login = async (req, res) => {
  const { email, password } = req.body;
    let data = await user.findOne({ email });
    if (data) {
        bcrypt.compare(password, data.password, (err, result) => {
            if (result) {
                let token = jwt.sign({ id: data._id, role: data.role }, "token");
                res.cookie("token", token).send({ msg: "user login successfully" });
            }
            else {
                res.send({ msg: "not valid" });
            }
        });
    }
    else {
        res.send({ msg: "user not defined" });
    }
};

const userlogin = async (req, res) => {
  res.render("login")
}

const users = async (req, res) => {
  res.send({ msg: "cheking token" });
};

module.exports = { userlogin, signup, usersignup, login, users }