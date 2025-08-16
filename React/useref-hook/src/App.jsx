
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {

  const [time, setTime] = useState(0);
  let timerRef = useRef(0);


  function startBtn(){
    timerRef.current = setInterval(() => {
      setTime(time=> time+1)
    }, 1000);
  }

  function stopBtn(){
      clearInterval(timerRef.current)
      timerRef.current=null;
  }

  function handleReset(){
   stopBtn();
    setTime(0);
  }

  // const [count, setCount] = useState(0);
  // let val = useRef(0);
  // let btn = useRef();

  // useEffect(()=>{
  //   console.log("its run on every render")
  // })

  // function handleClick(){
  //   val.current=val.current+1;
  //   console.log("value of val",val.current)
  //   setCount(count+1)
  // }

  // function handleClickBtn(){
  //   btn.current.style.backgroundColor="red";
  // }

  return (
 <div>

  <h1>Stopwatch : {time} second</h1>

  <br /><br />
  <button onClick={startBtn}>start</button>

    <br /><br />
  <button onClick={stopBtn}>stop</button>
    <br /><br />

  <button onClick={handleReset}>reset</button>


  {/* <button ref={btn}  onClick={handleClick}>increasse</button>
  <br />
  <br />
  <button onClick={handleClickBtn}>
    change color
  </button>

  <div>
    <p>Count :{count}</p>
  </div> */}
 </div>

  )
}

export default App
      