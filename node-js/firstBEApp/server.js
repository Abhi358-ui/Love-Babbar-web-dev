// this line is added the express packaage in our code
const express = require('express')
const app = express(); // initialize a app
const port = 3000; // jis port pr request aata ha machine usi port ko response karta ha and here port is a number that store the port number

app.get('/',(req,res)=>{
    res.send("This is a home page and is a jjjjjjj");
})


// here you say hey app agr is server ke port number 3000 pr koi request aaya to use response dena
app.listen(port, ()=>{
    console.log(`the app is running on the port ${port}`)
})



