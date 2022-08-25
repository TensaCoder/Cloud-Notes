// Option 1
// const express = require('express')
// const router = express.Router();

// import { Router } from "express";   //Cannot use import outside a module, use require instead

// Option 2
const Router = require('express')
const router = Router();

let obj1={
    name : 'Herschel',
    email: 'herschel.m@somaiya.edu',
    password:'TensaZangetsu'
}

router.get('/', (req, res)=>{
    console.log(req.body)
    res.json(obj1);
})

module.exports = router