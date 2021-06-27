const router = require("express").Router();
const { request } = require("express");
let pantry = require("../model/pantry");

router.route("/add").post((req,res)=>{

    const itemName = req.body.itemName;
    const size = req.body.size;
    const expDate = Date(req.body.expDate);
  

    const newPantry = new pantry({
          
        itemName,
        size,
        expDate,
          
    })

    newPantry.save().then(()=>{
        res.json("payment added");
    }).catch((err)=>{
          console.log(err);
    })


})



module.exports = router;