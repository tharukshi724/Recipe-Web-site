const router = require("express").Router();
const { request } = require("express");
const upload = require("../middleware/upload");

let recipe = require("../model/recipe");




//upload recipe
router.post("/upload",upload.single('image'),(req,res)=>{

  const title = req.body.title;
  
  const ingredients = req.body.ingredients;
  const time = req.body.time;
  const instructions = req.body.instructions;
 

  const newRecipe = new recipe({
     title,
     ingredients,
     time,
     instructions
   })

   if(req.file){
    newRecipe.image= req.file.path
   
  }
  

  newRecipe.save().then(()=>{
    res.json("recipe added");
}).catch((err)=>{
      console.log(err);
})

});

//view recipes

router.route("/viewRecipes").get((req,res)=>{
       recipe.find().then((recipe)=>{
              res.json(recipe);
       }).catch((err)=>{
         console.log(err);
       })
})

//view one recipe

router.routr("/recipe/:id").get((req,res)=>{

  const id = req.param.id;
recipe.findById(id).then((recipe)=>{
    res.json(recipe);
}).catch((err)=>{
  console.log(err);
})

})


module.exports = router;