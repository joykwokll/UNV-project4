import React from "react";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Appointments(props) {

    const { isLoggedIn } = props
    useEffect(() => {
        let loggedUser = sessionStorage.getItem("username")
        console.log(loggedUser);
        setUsername(loggedUser);
    }, [isLoggedIn]);


    const [error, setError] = useState();
    const [username, setUsername] = useState("");
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState();
    const [outlet, setOutlet] = useState();
    const [services, setServices] = useState();
    const [beautician, setBeautician] = useState();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };


    const handleAppointment = (event) => {
        event.preventDefault();
        console.log("submitted")
        fetch("/api/appointment/appointment", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
              username: username, 
              date: date,
              time: time,
              outlet: outlet,
              services: services,
              beautician: beautician 
            })
        })
        
            .then((res) => {
              console.log(res)
              if (res.status === 200) 
                {
                setError(<>
                  {[
                    'success',
                  ].map((variant) => (
                    <Alert key={variant} variant={variant} className="mt-3">
                      Appointment have been made~
                    </Alert>
                  ))}
                </>)
              }}
            )
                  
          }
    
    

    return (
        <Container>
            <hr/>
        
            <Row>
                <Col> <div className="appointments">
                    <br />
                    <h3>Hi! {username} </h3>
                    <p>Make an appointment! </p>
                    <Calendar onChange={setDate} value={date} />
                </div></Col>
                <br />
            </Row>

            <Row>
                <Col>
                    {/* <Row className="text-center"><h1>Welcome to UNV</h1></Row>
      <Row className="text-center"><h2>Rejuvenate Your Skin With UNV Now!</h2> </Row> */}
                    <Form>
                        <br />
                        <p> Date: {date.toLocaleDateString("en-US", options)}</p>
                        <Form.Group className="mb-3" controlId="appointment">
                            <Form.Label>Time: {time} </Form.Label>
                            <Form.Control type="time"  onChange={(event) => {setTime(event.target.value)}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="outlet">
                            <Form.Label>Outlet: </Form.Label>
                            <Form.Select aria-label="Default select example" value={outlet} onChange={(event) => {setOutlet(event.target.value)}}>
                                <option>Choose One</option>
                                <option value="Jurong East">Jurong East</option>
                                <option value="Tanjong Pagar">Tanjong Pagar</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="services">
                            <Form.Label>Services: </Form.Label>
                            <Form.Select aria-label="Default select example" value={services} onChange={(event) => {setServices(event.target.value)}}>
                                <option>Treatment Services</option>
                                <option value="Anti Aging">Anti Aging</option>
                                <option value="Pigmentation">Pigmentation</option>
                                <option value="Sensitive Skin">Sensitive Skin</option>
                                <option value="Pimple">Pimple</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="beautician">
                            <Form.Label>Preferred Beautician: </Form.Label>
                            <Form.Control type="beautician" value={beautician} onChange={(event) => {setBeautician(event.target.value)}}/>
                        </Form.Group>

                        <Button mb-3 variant="primary" type="submit" onClick={(event) => {handleAppointment(event)}}>
                            Make Appointment
                        </Button>
                        <br />
                        {error}
                    </Form>
                </Col>
            </Row>
           
        </Container>

    );
}

export default Appointments;
