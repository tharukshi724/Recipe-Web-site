const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

const app = express();
require("dotenv").config();

const PORT =process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopologyL:true,
    useFindAndModify:false


});

const connection = mongoose.connection;

connection.once("open",() => {
            
       console.log("mongo db connection success");
});

const storage = multer.diskStorage({
    destination:(req,file,next)=>{
        next(null,"./uploads/")
    },
        
    
    filename:function(req,file,cb){
       cb(null,file.fieldname + '-'+new Date().toISOString() +
    file.originalname);
    }
});

const fileFilter = (req,file,cb)=>{
    cb(null,true);
}

const upload = multer ({
    
    storage:storage,
    fileFilter:fileFilter,
});


//pantry management
const pantryRoute = require("./routes/pantrys.js");

app.use("/pantry",pantryRoute);

//user registration
const userRoute = require("./routes/users.js");
app.use("/user",userRoute);

module.exports = upload;
//upload recipe
const recipeRoute = require("./routes/recipes.js");
app.use("/recipe",recipeRoute);

app.listen(PORT,() => {
    console.log("SERVER IS RUNNNING ON ${PORT}");
})