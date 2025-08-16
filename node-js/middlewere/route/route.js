
const express = require('express')
const router = express.Router()

// middleware
const auth = function (req, res, next) {
    console.log("i am inside the middlewaere");

    // create a user
    req.user = { userid: 1, role: "admin" }

    if (req.user) {
        next();
    } else {
        // if not a valid user
        return res.json({
            success: "false",
            message: "Not a valif users"
        })
    }
}

// middlewere 2
const isStudent = function (req, res, next) {
    console.log("i am inside the middleware 2");

    if (req.user.role === 'student') {
        next();
    }
    else {
        res.json = {
            success: true,
            message: "this route for  the student route"
        }
    }
}

// middle ware 3
const adminMiddleware = function (req, res, next) {
    console.log("i am inside middlware 3");
    if (req.user.role == "admin") {
        next();
    }
    else {
        res.send({
            success: false,
            message: "you are not the admin"
        })
    }
}

router.get('/student', auth, isStudent, (req, res) => {
    console.log("i am inside the student router");
    res.send("Student specific pages");
})

router.get('/admin', auth, adminMiddleware, (req, res) => {
    console.log("i am inside the admin ");
    res.send("admin specific page")
})

module.exports = router
