const mongoose = require("mongoose");

 
var Schema = mongoose.Schema

const UserSchema = new  Schema ({
            name :{
                type: String,
                required: true
            },
            email:{
                type: String,
                required: true
            },
            password:{
                type: String,
                required: true
            },
            data:{
                type: Date,
                default: Date.now 
            },
            location:{
                type: String,
                required: true
            }
        
    
});


module.exports = mongoose.model('user', UserSchema);