import './App.css'

function App() {

  function hanDleClick() {
    alert("clicked")
  }

  function mouseHandler() {
    alert("you are at the para")
  }

  function changeVal(e) {
    console.log("the value is "+ e.target.value)
  }

  function submithandler(e) {

    e.preventDefault();
    alert("form successfully submited!")
  }

  return (
   <div>

    <form onSubmit={submithandler}>
      <input type="text" onChange={changeVal} />
      <button type='submit'>Submit</button>
    </form>



    {/* <p onMouseOver={mouseHandler}>I am a paragraph</p>

   <button onClick={hanDleClick}> 
    Clicked me
   </button> */}

   </div>
  )
}

export default App
