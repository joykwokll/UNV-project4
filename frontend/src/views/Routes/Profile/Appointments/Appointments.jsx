import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Appointments(props) {

 const {isLoggedIn} = props

    const [username, setUsername] = useState("");
    useEffect(() => { 
        let loggedUser = sessionStorage.getItem("username") 
        console.log(loggedUser);
        setUsername(loggedUser);
    }, [isLoggedIn]);



  return (
    <Container>
      <Row>
        <Col> <div className="appointments">
          <br/>
          <h3>Hi! {username} </h3>  
          <p>Make an appointment! </p>
          <Calendar />

          
    
        </div></Col>


   
      </Row>
    </Container>

  );
}

export default Appointments;
