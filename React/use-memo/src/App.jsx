
import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setinput] = useState(0);

  function expenseTask(num) {
    console.log('inside expensive task');
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2;
  }

  // let doubleValue = expenseTask(input);
  // instead of upper value we are using usememohook ye jo last number input pr function call hua tha usko stor rakhta ha
  let doubleValue = useMemo(() => expenseTask(input), [input])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increment</button>

      <div>
        <p>Count : {count}</p>
      </div>
      <input type="number"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />

      <div>
        Double : {doubleValue}
      </div>
    </div>
  )
}

export default App
