import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {

  const [isLoggedin, setLoggedin] = useState(false);


  // early return
  
  if(!isLoggedin) {
    return(
      <LoginBtn />
      
    )
  }


  // logical and 

  return(
    <div>
      <h1>Welcome to web dev course</h1>
      {isLoggedin && <LogoutBtn />}
    </div>
  )



  // conditional rendring

  // return(
  //   <div>
  //     {isLoggedin ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )



// if else

  // if(isLoggedin){
  //   return(
  //     <LogoutBtn />
      
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn />
  //   )
  // }
}

export default App
