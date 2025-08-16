
// class Human{

//     age =18;  // public
//     #wt =33;  // private
//     ht =23;

//     constructor(newAge,newWeight){   // constructor
//         this.age=newAge;
//         this.#wt=newWeight;
//     }

//     walking(){
//         console.log("i am walking",this.#wt);
//     }

//     runnung(){
//         console.log("i am running ");
//     }

//     get fetchWeight(){   // getter function
//         return this.#wt;
//     }

//     set modifyweight(val){  // setter function
//         this.#wt=val;
//     }
// }

// let obj = new Human(20,32);
// // console.log(obj.#wt);
// console.log(obj.age);
// console.log(obj.fetchWeight);

// obj.walking();










// ************default value *****************


// function sayName(myName ="parbhu")  // default value
// {
//     console.log("my name is",myName);
// }

// // sayName("abhi roy");
// sayName();





// function sayName(fname ="parbhu", lname = fname.toLocaleUpperCase())  // default value
// {
//     console.log("my name is",fname," ",lname);
// }

// // sayName("abhi roy");
// sayName();





// ************ default value*************

// function solve(val =12)
// {
//     console.log("Hello ji ",val);
// }

// // solve("abhi");
// solve();




// ************** default value in object **************

// function solve(val ={age:13, wt:22, ht:44})
// {
//     console.log("Hello ji ",val);
// }

// // solve("abhi");
// solve();





// ********** Default parameter is undefined ***********


// function solve(val ="rahul")
// {
//     console.log("Hello ji ",val);
// }

// // solve("abhi");
// solve(undefined);  // default value print








// ************** default value in function *************


// function getAge(){
//     return 222;
// }

// function utility(name ="abhi",age = getAge()){
//     console.log(name , " ",age);
// }

// utility("ajay",22);