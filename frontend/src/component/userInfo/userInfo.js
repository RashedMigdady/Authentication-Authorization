import axios from "axios";
import React, { useEffect, useState } from "react";
import './userInfo.css'

export const UserInfo = ()=>{
    const [userInfo , setUserInfo] = useState("");
    const token = localStorage.getItem("token");
      
     useEffect(()=>{
         axios.get('http://localhost:5000/userInfo' , {
            headers: { Authorization: `Bearer ${token}` },
          }).then((info)=>{
              
              setUserInfo(info.data.userInfo[0])
          }).catch(err=>{
              console.log(err);
          })
     }, [])
    return(<div >
        <div className="profile">
        <p>{userInfo && userInfo.firstName +" "+userInfo.lastName}</p>
        <p>{userInfo && userInfo.email}</p>
        <p>{userInfo && userInfo.role}</p>
                
        </div>
    </div>)
}