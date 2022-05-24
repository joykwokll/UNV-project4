import React from "react";
import { Form , Button, Row, Col} from "react-bootstrap";
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm(props) {
  const [username,setUsername] = useState("Joy Kwok")
  const [password,setPassword] = useState("12345")
  
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("submitted")
    fetch("/api/users/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
        .then((res) => {
          console.log("response2",res)
          return res.json()
        })
        .then((data) => {
          sessionStorage.setItem("jwt",data.jwt)
          console.log("data",data)});
}
  
  return (
    <div>
      <br/>
      <h3>Login to your account!</h3>
      <br/>
      <Row>
        <Col>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username / Email / Contact </Form.Label>
          <Form.Control type="username" placeholder="Username / Email / Contact" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(event) => {handleLogin(event)}}>
          Submit
        </Button>
      </Form>
      </Col>
      </Row>

    </div>
  );
}

export default LoginForm;
