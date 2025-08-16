console.log("hello");




// creating a object
let obj ={
	name : "abhi",
	// "full name" : "abhi roy"
	age :20,
	weight:70,
	height:"5ft 10inch",
	greet:function(){
		console.log("hello kaise ho");
	}
};

console.log(obj);
obj.greet();

// console.log(typeof(obj));

// let obj2 =obj;  // create a reference

// console.log(obj2);



// array creation

// let arr = [1,2,3,4];
// console.log(arr);


// Array constructor

// let brr = new Array('abhi',1,true);
// console.log(brr);

// console.log(typeof(arr));
// console.log(typeof(brr));

// console.log(arr[0]);




// built in method in array

// let arr = [1,2,3,4,5,6];

// arr.push("abhi");
// arr.pop();

// arr.shift();
// arr.unshift(11);

// // console.log(arr.slice(2,4));

// arr.splice(1,0,"navin");
// console.log(arr);



// map function

// let arr = [10,20,30];

// let ansArray = arr.map((number) => {
// 	return number*number;
// })

// arr.map((number,index) =>{
// 	console.log(number);
// 	console.log(index);
// })

// console.log(ansArray);






// filter function

// let arr = [10,20,31,21,22,321,211];

// let evenArray=arr.filter((number)=>{
// 	if (number%2===0)
// 	{
// 		return true;
// 	}
// 	else
// 	{
// 		return false;
// 	}
// });

// console.log(evenArray);




// let arr = [1,2,'abhi','kunal',true,undefined];

// let ans = arr.filter((value) =>{
// 	if(typeof(value)==='string')
// 	{
// 		return true;
// 	}
// 	else
// 	{
// 		return false;
// 	}
// });

// console.log(ans);









// reduce method

// let arr =[10,20,30,40];

// let ans =arr.reduce((arr,curr) => {
// 	return arr+curr;
// },0); // 0 is acc

// console.log(ans);






//  sort method

// let arr = [1,21,1,3,222,22,321];
let arr =[1,4,2,3,5,9];
arr.sort();
console.log(arr);

console.log(arr.indexOf(4));  // index method