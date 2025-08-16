import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
// usenavigate hook ka use 2 page ke bich move krne ke liye kiya jata ha
  const navigate = useNavigate();
  function handleHome(){
      navigate('/');
  }
  return (
    <div>
        <h1>About page</h1>

        <button onClick={handleHome}>Home page</button>
    </div>
  )
}

export default About