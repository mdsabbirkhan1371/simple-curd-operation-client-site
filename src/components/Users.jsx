import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const usersData =useLoaderData()

    const [users,setUsers]=useState(usersData)

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

                const remaining =users.filter(user=>user._id !==_id)
                setUsers(remaining)
            }
        })
    }


    return (
        <div>
           <h3>Total Users: {users.length}</h3>

           <div>
            {
                users.map(user=><p key={user._id}>Name:{user.name} email: {user.email}
                <Link to={`/update/${user._id}`}>
                    <button>Update</button>
                </Link>
                 <button onClick={()=>handelDelete(user._id)}>X</button></p>)
                
            }
            
           </div>
        </div>
    );
};

export default Users;