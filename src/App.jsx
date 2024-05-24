
import './App.css'

function App() {

 

  const handleForm =e=>{
    e.preventDefault()

    const form = e.target;

    const name =e.target.name.value;
    const email =e.target.email.value;

    const user ={name,email}

    console.log(name,email)
    console.log(user,form)

  fetch("http://localhost:5000/users",{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(user)

  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.insertedId){
      alert("User Added Successful")
      form.reset()
  
    }
  })

     

  }

  return (
    <>
      
      <h1>Simple Crud</h1>

      <div>
        
          <form onSubmit={handleForm}>
            <input type="name" name="name" id="" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="submit" value="Add User" />
          </form>
      </div>

    </>
  )
}

export default App
