const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newRecipe = new Schema({
       image:{
           type:String,
           required:true
          
       },
       title:{
           type:String,
           required:true
       },
       ingrediets:{
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
       }
     
})

const recipe = mongoose.model("recipe",newRecipe);
module.export = recipe;


