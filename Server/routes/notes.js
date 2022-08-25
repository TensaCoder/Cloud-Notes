const Router = require('express')
const router = Router();

let obj1={
    name : 'Herschel',
    email: 'herschel.m@somaiya.edu',
    password:'TensaZangetsu'
}

router.get('/', (req, res)=>{
    res.json('Empty file!!!');
})

module.exports = router