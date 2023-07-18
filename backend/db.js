const { default: mongoose } = require("mongoose");
require('dotenv').config()
let mongoURI = process.env.mongoURI;


 
 
// const mongoDB = async()   =>{
//     await(mongoose.connect(mongoURI).then(console.log("connected sucessfully")))
//     .catch (error => console.log(error));
//     }

const mongoDB = async()=>{
    await(mongoose.connect(mongoURI).then(console.log("connected successfully"), console.error))
    const fetched_data = await mongoose.connection.db.collection("food_items");
    const fetched_catdata =await mongoose.connection.db.collection("foodCategory");
    const catData = await fetched_catdata.find({}).toArray()
    fetched_data.find({}).toArray().then((data)=>{
        global.food_items = data;
        global.foodCategory = catData;
        
    }) 

   }
       
    

    


module.exports = mongoDB;


