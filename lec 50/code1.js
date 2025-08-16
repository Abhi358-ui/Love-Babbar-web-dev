
// error handling in javascript

// --> Error is just a event that impact the normal flow of code execution



// compile time error
// console.log(ww



// run time Error
// console.log(x);











// try catch block

// try{
//     console.log("Start...");
//     console.log(x); // Error
//     console.log("end...");
// }
// catch(e)
// {
//     console.log("sorry yaar error")
// }

// finally{
//     console.log("the end...");
// }







// Lets create a custom Error

try{
    // refernce error
    console.log(x);
}
catch(e)
{
    throw new Error("Bhai pahle declare kr do");
}






// let errorcode =100;
// if(errorcode==100)
// {
//     throw new Error("invalid json");
// }