import axios from "axios";
import React, { useEffect, useState } from "react";

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
    return(<div>
        {userInfo && userInfo.firstName +" "+userInfo.lastName}
    </div>)
}