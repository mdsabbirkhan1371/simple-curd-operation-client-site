import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users =useLoaderData()

    const handelDelete=(_id)=>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                alert('Your Data is Deleted From DB')
            }
        })
    }


    return (
        <div>
           <h3>Total Users: {users.length}</h3>

           <div>
            {
                users.map(user=><p key={user._id}>Name:{user.name} email: {user.email} <button onClick={()=>handelDelete(user._id)}>X</button></p>)
                
            }
            
           </div>
        </div>
    );
};

export default Users;