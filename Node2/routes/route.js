// const { Router } = require('express');

const express = require('express')
const { getData, postData, updateData, deleteData, singleData } = require('../Controllers/StudentController')
const { userSignup, userLogin, loggedUser } = require('../Controllers/UserController')
const { userDashboard } = require('../middleware/authmiddleware')

const route = express.Router()

route.get("/", (req, res) => {
    res.send("I am from router")
})

route.get("/get-data", getData)
route.post("/post-data", postData)
route.put("/update-data/:id", updateData)
route.delete("/delete-data/:id", deleteData)
route.get("/single-data/:id", singleData)

//User

// route.post("/user-signup", userSignup)
route.post("/user-signup", userSignup)
route.post("/user-login", userLogin)
route.get("/dashboard", userDashboard, loggedUser)




module.exports = route