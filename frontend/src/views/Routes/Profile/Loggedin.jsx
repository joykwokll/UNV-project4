import React from "react";
import "./Profile.css"
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react';

function Profile(props) {

  const {isLoggedIn} = props

    const [username, setUsername] = useState("");
  
    useEffect(() => { 
        let loggedUser = sessionStorage.getItem("username") 
        console.log(loggedUser);
        setUsername(loggedUser);
    }, [isLoggedIn]);

    let loggedoutUser = () => {
        sessionStorage.removeItem("username")
        sessionStorage.removeItem("jwt")
    
      }


  return (
    <Container>
      <Row>
        <Col> <div className="profile">
          <h3>Hi! {username}</h3>
          <p>Make an appointment! </p>
          
    
        </div></Col>


   
      </Row>
    </Container>

  );
}

export default Profile;
