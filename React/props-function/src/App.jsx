
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  function clickHandler(){
    setCount(count+1);
  }

  return (
    <div>

    <Button handler={clickHandler}  text="click me">

      <h1>{count}</h1>

      </Button>



   {/* <Card name="abhishek">

      below is props children
      <h1>Hey how are you ?</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, rerum!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
   </Card>

   <Card children="mai ek children hu">

   </Card> */}

    </div>
  )
}

export default App
