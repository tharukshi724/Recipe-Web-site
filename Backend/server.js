const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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

const pantryRoute = require("./routes/pantrys.js");

app.use("/pantry",pantryRoute);

app.listen(PORT,() => {
    console.log("SERVER IS RUNNNING ON ${PORT}");
})