const { default: mongoose } = require("mongoose");
 
const mongoURI = "mongodb+srv://nicehashminer7744:new123456789@cluster0.29rw9zc.mongodb.net/gofoodmern?retryWrites=true&w=majority"
 
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