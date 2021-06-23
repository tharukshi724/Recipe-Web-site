const router = require("express").Router();

let pantry = require("./config/model/pantry");

//add pantry items
router.route("/addPantry").post((req,res)=>{

    const itemName = req.body.itemName;
    const size = req.body.size;
    const expDate = Date(req.body.expDate);

    const newPantry = new Pantry({

           itemName,
           size,
           expDate
    })

    newPantry.save().then(()=>{
        res.json("pantry added");
    }).catch((err)=>{
        alert(err);
    })
})