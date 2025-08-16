
import { useState } from 'react'
import './App.css'
import Card from './components/Card'



const App = () => {
  const [name,setName] = useState('');
  return (
    <div>

    <Card title="card1" name={name} setname={setName} />
    <Card title="card2" name={name} setname={setName} />


    {/* <p>Parent inside : {name}</p> */}
    </div>
  )
}

export default App