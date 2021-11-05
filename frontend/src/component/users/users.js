import axios from "axios";
import React, { useEffect, useState } from "react";
import './users.css'



export const Users = ()=>{
    const [users , setUsers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/users').then((result)=>{
              
              setUsers([...result.data.users])
        }).catch(err=>{
            console.log(err);
        })
    },[])



    return(<div className="card">

        {users && users.map((element , index)=>{
            return (<div key={index} className="oneCard">
                <p >Name : {element && element.firstName + " " + element.lastName}</p>
                <p> Email : {element && element.email}</p>

            </div>)
        })}



    </div>)
}