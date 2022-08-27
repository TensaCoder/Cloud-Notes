// Option 1
// const express = require('express')
// const router = express.Router();

// import { Router } from "express";   //Cannot use import outside a module, use require instead

// Option 2
const Router = require('express')
const router = Router();
const User = require('../models/User');


// Create a user using POST at "/api/auth/createuser". Doesnt require auth

router.post('/createuser', (req, res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.json(req.body);
})


module.exports = router