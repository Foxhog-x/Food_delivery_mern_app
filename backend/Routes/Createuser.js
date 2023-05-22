const express = require('express')
const router = express.Router()
const User = require('../models/User')
  

router.post('/createuser', async (req, res) =>{
    try {
        await User.create({
            name: "onkar patil",
            password : "b7qyxwwpbr",
            email: "nicehashminer@gmail.com",
            location: "somewere in universe"
        })
        res.json({sucess:true})
        
    } catch (error) {
        console.log(error)
        res.json({sucess:false})
        
    }
})


module.exports = router;