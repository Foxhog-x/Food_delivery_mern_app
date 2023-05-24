const express = require('express')
const router = express.Router()
const User = require('../models/User')
  

router.post('/createuser', async (req, res) =>{
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
        
    }
})


module.exports = router;