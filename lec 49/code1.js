
// let obj ={
//     age:12,
//     wt:22,
//     ht:44
// };

// console.log(obj);

// obj.color="white";
// console.log(obj);


// **********Object cloning **********


// METHOD 1

// let obj ={
//     age:12,
//     wt:22,
//     ht:44
// };

// let cpy = {...obj}; // copy the object
// obj.age=77;
// console.log(obj);
// console.log(cpy);












// METHOD 2 

// let obj ={
//     age:12,
//     wt:22,
//     ht:44
// };

// let obj2={
//     value:121,
//     name:"abhi"
// };


// let cp = Object.assign({},obj,obj2);
// console.log(cp);














// METHOD 3

// let obj ={
//     age:12,
//     wt:22,
//     ht:44
// };

// let dest={

// };

// for(let key in obj)
// {
//     let newKey=key;
//     let newValue=obj[key];
//     //insert newKey and value in dest and create a clone

//     dest[newKey]=newValue;
// }

// //print the new cloning Object
// console.log(dest);
// console.log(dest);






// Garbage collactor