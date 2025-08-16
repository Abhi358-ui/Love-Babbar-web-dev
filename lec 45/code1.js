
// variable hosting

// console.log(age);
// var age =22;




// ********* function hosting ***********

// sayMyname("Abhi");

// function sayMyname(finalName){
//     console.log(finalName)
// }


// console.log(age);
// let age =22;



// sayHello();

// let sayHello=function (){   // error
//     console.log("Hello jii kaise ha");
// }


// class Human{

// }
// const obj = new Human();





// let greet = function(){
//     console.log("hello");
// }

// greet();     






// function greetMe(greet,fullname)
// {
//     console.log("Hello",fullname);
//     greet();
// }

// greetMe(greet,"Abhi");


// function greet(){
//     console.log("Greeting for the day");
// }





// one function return the other function


// function solve(number)
// {
//     return function(number)
//     {
//         return number*number;
//     }
// }

// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns); 







// function of array


// const arr =[
//     function(a,b){
//         return a+b;
//     },

//     function(a,b){
//         return a-b;
//     },

//     function(a,b){
//         return a*b;
//     }
// ];

// let first = arr[1];
// let ans = first(2,3);
// console.log(ans);









let obj ={
    age:23,
    wt:44,
    ht :77,
    greet :()=>{
        console.log("Hello duniya");
    }
}

console.log(obj.age);
console.log(obj.wt);
obj.greet();

console.log(console.table(obj));








