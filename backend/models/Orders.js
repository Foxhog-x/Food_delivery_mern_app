const mongoose = require("mongoose");


const {Schema} = mongoose;


const Orders_Schema = new  Schema({
        email:{
            type: String,
            require: true,
            unique: true,
        },
        orederData:{
            type: Array,
            required:true,
        },
})


module.exports = mongoose.model('orders', Orders_Schema);