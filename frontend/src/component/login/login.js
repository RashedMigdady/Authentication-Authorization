import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./login.css";
export const Login = () => {
  const [email , setEmail] =useState("");
  const [password , setPassword] = useState("");
  const history = useHistory();



  const login = async (e)=>{
    e.preventDefault();

   await axios.post('http://localhost:5000/login' , {email , password}).then((result)=>{     
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("role", result.data.role);  
      if (result.data.role == 'admin')
      {
        history.push('/users');
      } else{

      history.push('/info');

      }  
      
    }).catch(err=>{
      console.log("rashed" , err);
      
    })
  }



  return (
    <>
      <div className="containerLogin">
        <Form>
          <Form.Text className="text-muted">Login</Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  onChange={(event)=>{setEmail(event.target.value)}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}} />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ marginLeft: "150px" }} onClick={login}
          >
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};
