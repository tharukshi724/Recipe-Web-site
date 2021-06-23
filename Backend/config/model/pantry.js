const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pantrySchema = new Schema({

     itemName:{
         type:String,
         required:true
     },
     size:{
         type:String,
         required:true
     },
     expDate:{
         type:Date,
         required:true
     }

})

//pass schema to database
const pantry = mongoose.model("pantry",pantrySchema);

module.exports = pantry;