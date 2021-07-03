const router = require("express").Router();
const { request } = require("express");
let user = require("../model/user");

router.route("/adduser").post((req,res)=>{

           const firstname = req.body.firstname;
           const lastname = req.body.lastname;
           const username = req.body.username;
           const email = req.body.email;
           const password = req.body.password;

           const newUser = new user({
               firstname,
               lastname,
               username,
               email,
               password
           })

           newUser.save().then(()=>{
            res.json("user added");
           }).catch((err)=>{
               alert(err);
           })

})

router.route("/validate").post((req,res)=>{
       
    try{
        const username = req.body.username;
        const password = req.body.password;

       const uname = user.findOne({username:username});
       

       if(uname.password === password){
           res.status(201).render("index");
       }
       else{
           res.send("password not matching");
       }

    }catch(error){
          res.status(400).send("Invalid username");
    }
})



module.exports = router;