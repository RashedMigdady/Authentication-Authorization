import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import PasswordChecklist from "react-password-checklist";
import axios from "axios";
import "./signUp.css";
import { BsEye, BsEyeSlash } from "react-icons/all";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [item, setItem] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");

  const register = () => {
    axios
      .post(`http://localhost:5000/register`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="ContainerSignUp">
        <Form>
          <Form.Text className="text-muted">Sign Up</Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <i
              style={{
                marginLeft: "320px",
                marginTop: "-33px",
                position: "absolute",
              }}
              onClick={(e) => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </i>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Comfirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </Form.Group>

          <Button
            variant="outline-primary"
            type="submit"
            style={{ marginLeft: "130px" }}
            onClick={register}
            disabled={!item}
          >
            Register
          </Button>
        </Form>
        <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital", "match"]}
          minLength={5}
          value={password}
          valueAgain={confirmPassword}
          onChange={(isValid) => {
            setItem(isValid);
          }}
        />
      </div>
    </>
  );
};
