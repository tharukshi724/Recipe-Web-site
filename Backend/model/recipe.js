const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeShema = new Schema({
      
       title:{
           type:String,
           required:true
       },
       ingredients:{
           type:String,
           required:true
       },
        time:{
            type:String,
            required:true
        },

       instructions:{
           type:String,
           required:true
       },
       image:{
           type:String,
           required:true
          
       }
     
})

const recipe = mongoose.model("recipe",recipeShema);

module.exports = recipe;


