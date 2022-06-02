import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col , ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react'


function LoggedinProfile(props) {

    const [error, setError] = useState();
    const [appointmentDetails,setAppointmentDetails] = useState({
      date:"               ",
      outlet:"",
      services: "",
      time: "",
      username: ""
    });

    const handleLoggedinProfile = () => { 
      let username = sessionStorage.getItem("username")
        console.log("submitted")
    fetch( "/api/appointment/", {
        method: "GET",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          "username": username
        },
      })
        .then((response) => response.json())
        .then((data) => {
            console.log("dataaaaa", data)
            setAppointmentDetails({...data.appointmentDetail})
        })
    }
    useEffect(() => {
        handleLoggedinProfile()
      },[])
 
    useEffect(() => {
      console.log(appointmentDetails)
    },[appointmentDetails])


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
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Appointment</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Your Appointment Details</Card.Subtitle>
          <ListGroup variant="flush">
            <ListGroup.Item>Date: {appointmentDetails.date.slice(0,10)}</ListGroup.Item>
            <ListGroup.Item>Outlet: {appointmentDetails.outlet}</ListGroup.Item>
            <ListGroup.Item>Services: {appointmentDetails.services}</ListGroup.Item>
            <ListGroup.Item>Time: {appointmentDetails.time}</ListGroup.Item>
            <ListGroup.Item>Username: {appointmentDetails.username}</ListGroup.Item>
          </ListGroup>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
   
      </Row>
    </Container>

  );
}

export default LoggedinProfile;
