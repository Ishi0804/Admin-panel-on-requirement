const mongoose= require("mongoose");

const database= async()=>{
   try {
      await mongoose.connect("mongodb://localhost:27017")
    console.log("Database connected..!")
   } catch (error) {
    console.log(error);
   }
}
module.exports={ database}
