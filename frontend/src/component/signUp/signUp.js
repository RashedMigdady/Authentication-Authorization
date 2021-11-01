import React, { useState } from "react";
import { Form , Button} from "react-bootstrap";
import axios from "axios";
import './signUp.css'


export const SignUp = ()=>{
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const register = ()=>{
        axios.post(`http://localhost:5000/register` , {firstName,lastName,email,password}).then((result)=>{
            console.log(result);
            
        }).catch(err=>{
            console.log(err);
        })
    }


    return(<>
    <div className="ContainerSignUp">
    <Form>
          <Form.Text className="text-muted">Sign Up</Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" onChange={(event)=>{setFirstName(event.target.value)}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" onChange={(event)=>{setLastName(event.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(event)=>{setEmail(event.target.value)}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}}/>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ marginLeft: "150px" }} onClick={register}
          >
            Register
          </Button>
        </Form>
    </div>


    </>)
}