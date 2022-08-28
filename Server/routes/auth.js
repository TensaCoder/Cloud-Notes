// Option 1
// const express = require('express')
// const router = express.Router();

// import { Router } from "express";   //Cannot use import outside a module, use require instead

// Option 2
const Router = require('express')
const router = Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


// Create a user using POST at "/api/auth/createuser". Doesnt require auth

router.post('/create-user',
[
    body('name').isLength({min : 3}),
    body('email').isEmail(),
    body('password', 'Password should be atleast 8 character').isLength({min : 8})
], 
(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email : req.body.email,
        password: req.body.password
      })
      .then(user => res.json(user));
});


module.exports = router