import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, ListGroup, Modal, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react'


function LoggedinProfile(props) {

  const [error, setError] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "               ",
    outlet: "",
    services: "",
    time: "",
    username: ""
  });

  const handleLoggedinProfile = () => {
    let username = sessionStorage.getItem("username")
    console.log("submitted")
    fetch("/api/appointment/", {
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
        setAppointmentDetails({ ...data.appointmentDetail })
      })
  }
  useEffect(() => {
    handleLoggedinProfile()
  }, [])

  useEffect(() => {
    console.log(appointmentDetails)
  }, [appointmentDetails])


  return (
    <Container>
      <Row>
        <Col sm={8}> <div className="profile">
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
            <Card.Title>Your Next Appointment</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Appointment Details</Card.Subtitle>
            <ListGroup variant="flush">
              <ListGroup.Item>Date: {appointmentDetails.date.slice(0, 10)}</ListGroup.Item>
              <ListGroup.Item>Time: {appointmentDetails.time}</ListGroup.Item>
              <ListGroup.Item>Outlet: {appointmentDetails.outlet}</ListGroup.Item>
              <ListGroup.Item>Services: {appointmentDetails.services}</ListGroup.Item>
              <ListGroup.Item>Beautician: {appointmentDetails.beautician}</ListGroup.Item>

            </ListGroup>

            <Button variant="outline-primary" size="sm" className="mb-2" onClick={handleShow}>
              Update your Appointment
            </Button>

            <Button mt-3 variant="outline-warning" size="sm" onClick={handleShow}>
              Delete your Appointment
            </Button>
          </Card.Body>
        </Card>

        <Col sm={4}>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit your details here~</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Date"
                  // value={forgetEmail}
                  // onChange={event => setForgetEmail(event.target.value)}
                  // autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="Time"
                  // value={forgetEmail}
                  // onChange={event => setForgetEmail(event.target.value)}
                  // autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Outlet</Form.Label>
                  <Form.Select aria-label="Default select example" >
                    <option>Choose One</option>
                    <option value="Jurong East">Jurong East</option>
                    <option value="Tanjong Pagar">Tanjong Pagar</option>
                  </Form.Select>

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Services</Form.Label>
                  <Form.Select aria-label="Default select example" >
                    <option>Treatment Services</option>
                    <option value="Anti Aging">Anti Aging</option>
                    <option value="Pigmentation">Pigmentation</option>
                    <option value="Sensitive Skin">Sensitive Skin</option>
                    <option value="Pimple">Pimple</option>
                  </Form.Select>
                  {/* value={services} onChange={(event) => { setServices(event.target.value) } */}

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Beautician</Form.Label>
                  <Form.Control
                    type="outlet"
                    placeholder="Beautician Preffered"
                  // value={forgetEmail}
                  // onChange={event => setForgetEmail(event.target.value)}
                  // autoFocus
                  />

                </Form.Group>
              </Form>
              {/* {sentEmail
          ? <p><i>Email have been sent! Kindly check your inbox.</i></p> 
          : forgetEmailError} */}

            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

              <Button variant="primary" >
                Update edits
              </Button>

              {/* onClick={(event) => {resetPassword(event)}} */}

            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>

  );
}

export default LoggedinProfile;
