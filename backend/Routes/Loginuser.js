 
const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/loginuser', async (req, res) => {
    var email = req.body.email
    try {
        let userdata = await User.findOne({email});
            if(!userdata){
                return res.status(400).json({error:"please try with different email address"})
            }
            if(req.body.password !== userdata.password){
                return res.status(400).json({error: "invalid password"})

            }else{
                res.json({sucess:true})
            }
        } catch (error) {
            console.log(error)
            res.json({sucess:false})
        };
        
         
    })



    module.exports = router;