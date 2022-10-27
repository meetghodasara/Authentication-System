const express = require('express');
const path = require('path');
const app = express(); 
require('dotenv').config();

const port = process.env.PORT || 3000;
require('./db/connection');

app.set('views', path.join(__dirname , "../views"));
app.set("view engine" , "hbs");
 
app.get('/' , (req , res) =>{
    res.render("index")
})
app.listen(port ,() => {
    console.log("Click here");
    console.log('http://localhost:'+ port);
})
