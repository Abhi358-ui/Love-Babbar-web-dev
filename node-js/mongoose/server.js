const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db.js')
const userRoute = require('./routes/userRoutes.js') 
const app = express();
const port = 3000;

// db method
connectDB();

// middleware for json interaction
app.use(express.json());


app.use('/user',userRoute);

app.listen(port,()=>{
    console.log("server started at "+port)
})
