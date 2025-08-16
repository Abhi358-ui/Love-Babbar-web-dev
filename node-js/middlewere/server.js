
const express = require('express')
const app = express();
const port = 8000;

// // middleware to parse the req body
// app.use(express.json())

// // middleware making -- logging , auth, validate
// // middleware ka order bahut mayne rakhta ha

// const loggingMiddleware = function (req, res, next) { // creation of a middleware
//     console.log("loggin kr liya");
//     next();
// }

// const authMiddleware = function (req, res, next) {
//     console.log("authentication kr raha hu");
//     res.send("chal ghar chal")
//     // next();
// }

// const validateMiddleware = function (req, res, next) {
//     console.log('validate kr raha hu');
//     next();
// }


// app.use(loggingMiddleware); // load the middleware in the app
// app.use(authMiddleware);
// app.use(validateMiddleware);


// mounting the routes 
const route = require('./route/route.js');
app.use('/api',route);


app.get('/', (req, res) => {
    console.log(req.body)
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`server started ${port}`);
})
