import Usercard from "./components/Usercard"
import './App.css'


function App() {

  return (
   
    <div className="container">
      <Usercard name="Navin" desc='hii i am abhishek'></Usercard>
       <Usercard name="Abhishek"></Usercard>
        <Usercard name="Gautaum"></Usercard>
    </div>
  )
}

export default App
