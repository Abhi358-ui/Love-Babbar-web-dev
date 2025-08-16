import './App.css'
import { useForm } from 'react-hook-form'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onsubmit(data) {
    await new Promise((resolve)=>setTimeout(resolve,5000))
    console.log("form submited",data);
    
  }

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label>First Name : </label>
        <input {...register('firstname',
          {required:true,
          minLength:{value:3,message:"value atleast 3 "},
          maxLength:4
          })} />
          {errors.firstname && <p className='err-mess'>{errors.firstname.message}</p>}
      </div>
      <br />
       <div>
        <label>Middle Name : </label>
        <input {...register("middlename")}  />
      </div>
      <br />
      <div>
        <label>Last Name : </label>
        <input {...register('lastname')} />
      </div>

      <input type="submit" disabled={isSubmitting} value={isSubmitting ?"submiting" : "submit" } />
    </form>
  )
}

export default App
