import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigte = useNavigate();

  function handleClick() {
      navigte("/about");
  }


  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handleClick}>About page</button>
    </div>
  )
}

export default Home