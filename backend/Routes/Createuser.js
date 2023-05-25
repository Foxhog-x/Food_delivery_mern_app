const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { query, validationResult, body } = require('express-validator');  
const { hasUnreliableEmptyValue } = require('@testing-library/user-event/dist/utils');

router.post('/createuser', [
body('email').isEmail(),
body('password').isLength({min:8}),
body('name').isLength({min:5})],
async (req, res) => {
    const result = await validationResult(req);
    if(!result.isEmpty()){
       return res.status(400).json({result: result.array()});
    }
    try {
        await User.create({
            name: req.body.name,
            password : req.body.password,
            email: req.body.email,
            location:req.body.location
        })
        res.json({sucess:true})
        
    } catch (error) {
        console.log(error)
        res.json({sucess:false})
        
    };
})


module.exports = router;