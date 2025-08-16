import './App.css'
import { createContext, useState } from 'react';
import ChildA from './component/ChildA';


// // step 1 : create context
// const userContext = createContext();

// // step 2 : wrap all the component inside the provider
// // step 3 : pass the value
// // step 4 : inside the consumer consume the value of the provider



const themeContext = createContext();


function App() {

  const [Theme,setTheme] = useState('light');

  // const [user,setUser] = useState({
  //   name:"abhsihek"
  // })

  return (
    <div>



    <themeContext.Provider value={{Theme,setTheme}}>
      <div id='container' style={{backgroundColor:Theme==='light'? 'beige':'black'}}>
        <ChildA/>
      </div>
    </themeContext.Provider>



    {/* <userContext.Provider value={user}>

     <ChildA />
    </userContext.Provider> */}

    </div>
  )
}

export default App
// export {userContext}
export {themeContext}
