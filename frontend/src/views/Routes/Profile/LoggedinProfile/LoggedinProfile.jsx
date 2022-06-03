import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, ListGroup, Modal, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react'


function LoggedinProfile(props) {

  const [error, setError] = useState();
  const [show, setShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "",
    outlet: "",
    services: "",
    time: "",
    username: ""
  });
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    contact: ""
  });

  //APPT GET ROUTE
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


  //USER GET ROUTE
  const handleUserDetails = () => {
    let username = sessionStorage.getItem("username")
    console.log("submitted")
    fetch("/api/users/", {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "username": username
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("userdata", data)
        setUserDetails({ ...userDetails })
      })
  }

  useEffect(() => {
    handleUserDetails()
  }, [])

  useEffect(() => {
    console.log(userDetails)
  }, [userDetails])



  //UPDATE ROUTE
  const handleUpdateAppt = (event) => {
    console.log("eventupdatesubmitted")
    event.preventDefault();
    console.log("updatesubmitted")
    fetch("/api/appointment/updateappointment", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(appointmentDetails)
    })
        .then((res) => {
          console.log(res)
          if (res.status === 200) 
            {
            setError(<>
              {[
                'success',
              ].map((variant) => (
                <Alert key={variant} variant={variant} className="mt-1 mx-2 text-center">
                  <div className="text-center">
                  Updates have been saved~
                  </div>
                </Alert>
              ))}
            </>)
          }}
        )
      }

      //DELETE ROUTE
      const deleteAppointment = (event) => {
        let username = sessionStorage.getItem("username")
        console.log("eventupdatesubmitted")
        event.preventDefault();
        fetch("/api/appointment/:username", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'username' : username
            },
        })
        
            .then((res) => {
              console.log(res)
              if (res.status === 200) 
                {
                setError(<>
                  {[
                    'danger',
                  ].map((variant) => (
                    <Alert key={variant} variant={variant} className="mt-1 mx-2 text-center">
                      <div className="text-center">
                      Appointment deleted.
                      </div>
                    </Alert>
                  ))}
                </>)
              }}
            )
          }
    
  return (
    <Container>
      <hr/>
      <br/>
      <Row className="mt-3">
        <Col sm={8} > <div className="profile mx-auto w-75 ">
        <h1 class="heading-1">Your healthy skin starts today</h1>
        <div class="divider-1"> <span></span> </div>
        <hr/>
         
            <br/>
           <h4> Your Profile Details</h4>
           <br/>
            Username: {userDetails.username} 
            <br/>
            <br/>
            Email: {userDetails.email}
            <br/>
            <br/>
            Contact: {userDetails.contact}
       
        </div></Col>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Your Next Appointment</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Appointment Details</Card.Subtitle>
            <ListGroup variant="flush">
              {appointmentDetails.date && <> 
              <ListGroup.Item>Date: {appointmentDetails.date.slice(0, 10)}</ListGroup.Item> 
              <ListGroup.Item>Time: {appointmentDetails.time}</ListGroup.Item>
              <ListGroup.Item>Outlet: {appointmentDetails.outlet}</ListGroup.Item>
              <ListGroup.Item>Services: {appointmentDetails.services}</ListGroup.Item>
              <ListGroup.Item>Beautician: {appointmentDetails.beautician}</ListGroup.Item></>}

            </ListGroup>

            <Button variant="outline-primary" size="sm" className="mb-2" onClick={handleShow}>
              Update your Appointment
            </Button>

            <Button mt-3 variant="outline-warning" size="sm" onClick={handleDeleteShow}>
              Delete your Appointment
            </Button>
          </Card.Body>
        </Card>

        <Col sm={4}>

          {/*Edit appointment Modal  */}
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
                    value={appointmentDetails.date}
                    onChange={event => setAppointmentDetails({...appointmentDetails, date: event.target.value})}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="Time"
                    value={appointmentDetails.time}
                    onChange={event => setAppointmentDetails({...appointmentDetails, time: event.target.value})}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Outlet</Form.Label>
                  <Form.Select aria-label="Default select example" 
                  type="outlet"
                  value={appointmentDetails.outlet}
                  onChange={event => setAppointmentDetails({...appointmentDetails, outlet: event.target.value})}
                  autoFocus>
                    <option>Choose One</option>
                    <option value="Jurong East">Jurong East</option>
                    <option value="Tanjong Pagar">Tanjong Pagar</option>
                    
                  </Form.Select>

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Services</Form.Label>
                  <Form.Select aria-label="Default select example" 
                    type="services"
                    placeholder="Time"
                    value={appointmentDetails.services}
                    onChange={event => setAppointmentDetails({...appointmentDetails, services: event.target.value})}
                    autoFocus>
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
                  type="beautician"
                  placeholder="Beautician preferred"
                  value={appointmentDetails.beautician}
                  onChange={event => setAppointmentDetails({...appointmentDetails, beautician: event.target.value})}
                  autoFocus
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

              <Button variant="primary" onClick={(event) => {handleUpdateAppt(event)}}>
                Update Edits
              </Button>
            </Modal.Footer>
            {error}
          </Modal>

          {/*Delete appointment Modal*/}
          <Modal show={deleteShow} onHide={handleDeleteClose}>
            <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to delete your appointment?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <span><b>This action cannot be undone.</b></span>
            </Modal.Body>
            <Modal.Footer>
             
            <Button className="mr-3"variant="danger" onClick={(event) => {deleteAppointment(event)}}>
                Yes
              </Button>

              <Button variant="info" onClick={handleDeleteClose}>
                No
              </Button>
           
            </Modal.Footer>
            {error}
          </Modal>

          
        </Col>
      </Row>
    </Container>

  );
}

export default LoggedinProfile;
