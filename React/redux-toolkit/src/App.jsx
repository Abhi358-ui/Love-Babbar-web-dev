
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment , incrementByAmount, reset} from './feature/counter/createSlice';
import { useState } from 'react';

function App() {

  const counter = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();
  const [amt, setAmount] = useState(0);

  function handleIncrement(){
      dispatch(increment());
  }

  function handleDecrement(){
      dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

  function handleIncClick(){
   dispatch(incrementByAmount(parseInt(amt)))
  }
 
  return (
   <div className='container'>
    <button onClick={handleIncrement}>+</button>
    <p>Count:{counter}</p>
    <button onClick={handleDecrement}>-</button>
    <br /><br />
    <button onClick={handleResetClick}>*  </button>
    <br />
    <input 
    type='Number'
    value={amt}
    placeholder='Enter amount...'
    onChange={(e)=> setAmount(e.target.value)}
    />
    <br />
    <br />
    <button onClick={handleIncClick}>inc by value</button>
   </div>
  )
}

export default App
