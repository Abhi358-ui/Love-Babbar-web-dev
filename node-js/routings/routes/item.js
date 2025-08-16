// ye file sare item specific route ko store kre
const express = require('express')
const router = express.Router()


// / get request --> data fetching on the server
router.get('/',(req,res)=>{
    res.send("Got a get request abhishek");
    // res.sendFile('./dummy.html',{root:__dirname})
})

// post request ==> add a data to the server
router.post('/items',(req,res)=>{
    // res.send("Got a POST request");
     res.json({
        name:"abhishek",
        age:22,
        isMarried:false
    })
})

// put request ==> update the data on the server
router.put('/items/:id',(req,res)=>{
    res.send("Got a put request update karna ha");
   
})

// delete request == delete a data on the server
router.delete('/items/:id',(req,res)=>{
    res.send("got a delete request delete karna ha");
})

module.exports = router
