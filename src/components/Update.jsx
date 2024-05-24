import { useLoaderData } from "react-router-dom";


const Update = () => {
    const user =useLoaderData()
    console.log(user)

    const  handleUpdate=(e)=>{
        e.preventDefault()
        const form = e.target
        const name =form.name.value;
        const email = form.email.value;
        console.log(name,email)

        const updatedUser ={name,email}

        fetch(`http://localhost:5000/users/${user._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                alert('Your Data is modified Successful')
            }
        })

        
    }
    return (
        <div>
            <h3>Update Now</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={user.name} id="" />
                <br />
                <input type="email" defaultValue={user.email} name="email" id="" />
                <br />
                <input type="submit" value="Update Now" />
            </form>
        </div>
    );
};

export default Update;