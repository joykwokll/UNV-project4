import React from "react";
import { Form , Button, Row, Col} from "react-bootstrap";
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

function LoginForm(props) {
  let navigate = useNavigate();
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [error, setError] = useState("")

  //check if denied or accepted (frontend)
  //check with database if have such user, pw same (backend)

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("submitted")
    fetch("/api/users/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
        .then((res) => {
          console.log("response2",res)
          return res.json()
        })
        .then((data) => {
          console.log("data",data)

          if (data.successful) {
            sessionStorage.setItem("jwt",data.jwt)
            sessionStorage.setItem("username", username)
            navigate("/loggedin");
          } else {
            setError("Invalid Username or Password")
          }
        });

        
    


          
}
  
  return (
    <div className="m-5">
      <br/>
      <h3>Login to your account!</h3>
      <br/>
      <Row>
        <Col>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username / Email / Contact </Form.Label>
          <Form.Control type="username" placeholder="Username / Email / Contact" value={username} onChange={(event) => {setUsername(event.target.value)}} />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => {setPassword(event.target.value)}} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(event) => {handleLogin(event)}}>
          Submit
        </Button>
        <br/>
       <p> {error} </p>
      </Form>
      </Col>
      </Row>

    </div>
  );
}

export default LoginForm;
