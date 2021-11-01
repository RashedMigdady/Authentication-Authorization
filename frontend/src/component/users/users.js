import axios from "axios";
import React, { useEffect, useState } from "react";



export const Users = ()=>{
    const [users , setUsers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/users').then((result)=>{
              
              setUsers([...result.data.users])
        }).catch(err=>{
            console.log(err);
        })
    },[])



    return(<div>

        {users && users.map((element , index)=>{
            return (<p key={index}>{element.firstName}</p>)
        })}



    </div>)
}