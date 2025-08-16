import { useCallback, useState } from 'react'
import './App.css'
import Childcomponent from './components/Childcomponent'
import ExpensiveCompent from './components/ExpensiveCompent'

function App() {
  // const [count, setCount] = useState(0)

//* usecallback ka use krke kisi bhi function ko freze kiya ja sakta ha wo ek baar hi chalta ha 
  // const handleClick = useCallback(
  //   () => {
  //     setCount(count + 1);
  //   },[count]
  // )

  return (
    <div>


      <ExpensiveCompent/>

      {/* <div>
        <p>Count :{count}</p>
      </div>

      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
      <br />

      <div>
        <Childcomponent
          buttonName="clicked"
          handleClick={handleClick}
        />
      </div> */}

    </div>
  )
}

export default App
