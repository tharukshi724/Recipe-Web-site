const router = require("express").Router();
const { request } = require("express");
let pantry = require("../model/pantry");


//add pantry items
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


//view pantry items
router.route("/").get((req,res)=>{
      pantry.find().then((pantry)=>{
        res.json(pantry);
      }).catch((err)=>{
        alert(err);
      })
})

//update pantry items
router.route("/updatePantry/:id").put((req,res)=>{
       
    const id = req.params.id;
    const {itemName,size,expDate} = req.body;

    const existingPantry = new pantry ({
         itemName,
         size,
         expDate
    })

  pantry.findByIdAndUpdate(id,existingPantry).then(()=>{
        alert("update succeefully");
   }).catch((err)=>{
       alert("error occur during updating"+err);
   })
})

//getpantry id
router.route("/get/:id").get((req,res)=>{
         const id = req.params.id;

         pantry.findById(id).then(()=>{
            res.status(200).send({status:"display data"});
         }).catch((err)=>{
             alert("item cannot fetched"+err);
         })
})

// delete pantry item
router.route("/deletePantry/:id").delete((req,res)=>{
       
   let id = req.params.id;

    pantry.findByIdAndDelete(id).then(()=>{
        res.status(200).send({status:"user deleted"});
    }).catch((err)=>{
        res.status(500).send({status:"error in deleting user"});
    })
})


module.exports = router;