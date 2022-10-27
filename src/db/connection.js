const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.dbURL, {
    UseNewUrlParser:true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log('Database got a new error! ' + error);
})
