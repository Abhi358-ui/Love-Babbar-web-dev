const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// import item ki router file
const itemss = require('./routes/item')
// router file ko load karna
app.use('/api', itemss)


const bird = require('./routes/birds')
app.use('/nss', bird);
// -> /api/ -> item home page
// -> /api/items -> item post request
// -> /api/items/id -> put/delete request




// build a own request 
// // get request --> data fetching on the server
// app.get('/',(req,res)=>{
//     // res.send("Got a get request");
//     res.sendFile('./dummy.html',{root:__dirname})
// })

// // post request ==> add a data to the server
// app.post('/items',(req,res)=>{
//     res.send("Got a POST request");
//      res.json({
//         name:"abhishek",
//         age:22,
//         isMarried:false
//     })
// })

// // put request ==> update the data on the server
// app.put('/items/:id',(req,res)=>{
//     res.send("Got a put request");
   
// })

// // delete request == delete a data on the server
// app.delete('/items/:id',(req,res)=>{
//     res.send("got a delete request");
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})