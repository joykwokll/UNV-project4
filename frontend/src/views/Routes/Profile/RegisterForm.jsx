import React from "react";
import { Form , Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import {useNavigate} from "react-router-dom";

function RegisterForm(props) {
  let navigate = useNavigate();
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [contact,setContact] = useState("")
  const [password,setPassword] = useState("")
  
  const handleRegister = (event) => {
    event.preventDefault();
    console.log("submitted")
    fetch("/api/users/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ username: username, email: email, contact: contact, password: password })
    })
        .then((res) => {
          console.log("response2",res)
          return res.json()
        })
        .then((data) => {
          sessionStorage.setItem("jwt",data.jwt)
          console.log("data",data)});

          navigate("/loginform");
}
  return (
    <div className="m-5">
      <br/>
      <h3>Register An Account!</h3>
      <br/>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Username" value={username} onChange={(event) => {setUsername(event.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
      
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>Contact number</Form.Label>
          <Form.Control type="contact" placeholder="Contact number" value={contact} onChange={(event) => {setContact(event.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Click me if you would like to subscribe to our weekly newsletter!" />
        </Form.Group>
        <Form.Text className="text-muted">
            We'll never share your details with anyone else.
          </Form.Text>
          <br/>
        <Button variant="primary" type="submit" onClick={(event) => {handleRegister(event)}}>
          Submit
        </Button>
      </Form>

    </div>
  );
}

export default RegisterForm;


  /* // // import { useState } from "react";
// // import urlcat from "urlcat";
// // import { BACKEND } from "../../../utils/utils";
// // import {useNavigate} from 'react-router-dom'


// function Register() { */

//   const [error, setError] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // const [cfmPassword, setCfmPassword] =  useState("")
//   let navigate = useNavigate();

//   const registerAccount = (register) => {
//     const url = urlcat(BACKEND, `/api/users/register/${username}`);
//     fetch(url, {
//       method: "POST",
//       credentials: 'include',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(register),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           setError(data.error);
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const register = { username, email, password };
//     registerAccount(register);
//     setTimeout(()=> {
//       navigate("/login");
//      }, 1000);
//   };

//   return (
//     <body>
//       <h1>o</h1>
//       <h2>Register:</h2>
//       <>
//         <form onSubmit={handleSubmit}>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//           />
//           <br />
//           Email:
//           <input
//             type="text"
//             name="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//           <br />
//           Password:
//           <input
//             type="text"
//             name="email"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//           <p>{error}</p>
//           <br />
//           <button>Create</button>
//         </form>
//       </>
