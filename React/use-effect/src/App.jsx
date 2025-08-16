import './App.css'
import { useEffect, useState } from 'react';

function App() {

  // first -> side effect function
  // second -> clean-up functoin
  // third -> comma seprated dependies list

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  
  // // variation 1 
  // // runs on every rendring
  // useEffect(() => {
  //   alert("i will run on every rendring");
  // })


  // // variation 2 
  // // runs on only the first render
  // useEffect(() => {
  //   alert("i will run only the first rendering");
   
  // }, [])
  


  // // variation 3
  // // it will run when dependies is updated

  // useEffect(() => {
  //  alert("i will run when the count is updated")
  // }, [count])


  // // variation 4
  // // it will run when any dependies is updated
  // useEffect(() => {
  //  alert("i will run when the countor or total is updated")
  // }, [count,total])

3

  // variation 5
  // now add a cleanup function
  useEffect(() => {
    alert("count is updated")
  
    return () => {
      alert("it is a cleanup ha")
    }
  }, [count])
  
  

  function clkhandler() {
    setCount(count+1)
  }

  function totalhand() {
    setTotal(total+1);clkhandler
  }
  
  

  return (
    <div>

    <button onClick={clkhandler}>
      update count
    </button>
    <br />
    Count is : {count}

    <br />

    <button onClick={totalhand}>
      update total
    </button>
    <br />
    Total is : {total}

    </div>
  )
}

export default App
