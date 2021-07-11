const router = require("express").Router();
const fs = require('fs');
const path = require('path');


const { request } = require("express");
let upload = require("../server");
let recipe = require("../model/recipe");




//upload recipe
router.post('/uploadRecipe',upload.single('myimage'), (req,res,next)=>{

  
    console.log(req.file);
    const title =req.body.title;
    const ingredients = req.body.ingredients;
    const time  = req.body.time;
    const instructions = req.body.instructions;
    const image= req.file.path;

    const newRecipe = new recipe({
      title:title,
      ingredients:ingredients,
      time:time,
      instructions:instructions,
      image:image
    })

   newRecipe.save((err,newRecipe)=>{
      if(err){

          console.log(err);
      }
      else{
          item.save();
      }
    });
});


module.exports = router;