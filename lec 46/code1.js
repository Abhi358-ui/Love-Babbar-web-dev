
// Temporal dead zone in JS

// variable scoping

/* 

1. Global scoping 
2. function scoping
3. Block scoping


*/ 


// let age =22;  // Global scoping

// console.log(age);

// {
//     console.log(age);
// }



// if(true)
// {
//     console.log(age);
// }

// for(let i=0; i<2; i++)
// {
//     console.log(age);
// }










// function scoping

// function sayHello(){
//     const name ="abhi"; // function scoping
//     console.log(name);
// }

// sayHello();
// // console.log(name); // error













// Block scoping

{
    var height =22;
    let age =21; 
    const d =222;
}

console.log(height);
// console.log(age);  //error
// console.log(d);  // error














// Temporal dead zone

// console.log(mark);
// var mark =99;
// let mark =99;
// const mark =99;
// console.log(mark);





