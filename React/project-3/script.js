
let p = document.getElementById('para');
let btn = document.getElementById('btn');

let i=1;

btn.addEventListener("click",()=>{
    p.innerText=`You clicked ${i++} time`
})