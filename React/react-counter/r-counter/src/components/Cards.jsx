import React, { useState } from 'react'
import './Card.css'

const Cards = () => {
  const [count, setCount] = useState(0) // use state variabe
  return (

    <div className='conatiner'>

      <p id="para">You clicked {count} times</p>
      <button id='btn' onClick={()=>{setCount(count+1)}}>Clicked me</button>
      <button id='rst' onClick={()=>{setCount(0)}}>reset</button>
    </div>
  )
}

export default Cards