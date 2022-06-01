import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react'


function LoggedinProfile(props) {

    const [error, setError] = useState();

    const handleLoggedinProfile = () => {  
        console.log("submitted")
    fetch( "/api/appointment/", {
        method: "GET",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
            console.log(data)
          }
        })
        .catch((error) => console.log(error));
    }
    useEffect(() => {
        handleLoggedinProfile()
      },[])
 
  return (
    <Container>
      <Row>
        <Col> <div className="profile">
          <h3>Your healthy skin starts today</h3>
          <p>A journey to your healthy skin starts with the first step, and the first step in making a simple decision
            to give us an opportunity to serve you. Do fill in your details below to give us this chance!</p>
          {/* <button className="button mb-2" onClick={handleLogin}>Login</button>
          <br /> */}
          <button className="button" onClick={handleLoggedinProfile}>test</button>
        </div></Col>

      {/* {handleLoggedinProfile} */}
   
      </Row>
    </Container>

  );
}

export default LoggedinProfile;
