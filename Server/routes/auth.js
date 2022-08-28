// Option 1
// const express = require('express')
// const router = express.Router();

// import { Router } from "express";   //Cannot use import outside a module, use require instead

// Option 2
const Router = require('express')
const router = Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


// Create a user using POST at "/api/auth/createuser". Doesnt require auth

router.post('/create-user',
[
    body('name').isLength({min : 3}),
    body('email').isEmail(),
    body('password', 'Password should be atleast 8 character').isLength({min : 8})
], 
async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        let user = await User.findOne({email: req.body.email});
        if (user){
            return res.status(400).json({error : "A User with the email already exists!!!"})
        }

        // Once detail validation is done, we go on to encrypt the password and store the new encrypted password on the database using salt and hash function.
        let salt = bcrypt.genSaltSync(10);
        console.log(salt);
        let hash = bcrypt.hashSync(req.body.password, salt);

        // creating the user in the database
        User.create({
            name: req.body.name,
            email : req.body.email,
            password: hash
        })
        .then(user => res.json(user));
        
    } catch (err) {
        return res.status(500).json({ error: err.message})
        
    }
    
    
});

module.exports = router