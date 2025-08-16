

let promise1 = new Promise((resolve,rejected)=>{
    setTimeout(resolve,1000,"first");
})

let promise2 = new Promise((resolve,rejected)=>{
    setTimeout(resolve,2000,"second");
})

let promise3 = new Promise((resolve,rejected)=>{
    setTimeout(rejected,4000,"third");
})

Promise.all([promise3,promise2,promise1]).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})
