import React from "react";
import { Form , Button, Row, Col} from "react-bootstrap";
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Secret(props) {
  const [username,setUsername] = useState("Joy Kwok")
  const [password,setPassword] = useState("12345")
  
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("submitted secret")
    const jwt = sessionStorage.getItem("jwt")
    fetch("/api/posts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'token': jwt
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
     Secret Page
     <button onClick={(event)=>{handleLogin(event)}}>POST</button>
    </div>
  );
}

export default Secret;
