import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
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


    const [username, setUsername] = useState("");
    const [date, setDate] = useState(new Date());
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

    return (
        <Container>
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
                            <Form.Label>Time: </Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="outlet">
                            <Form.Label>Outlet: </Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Choose One</option>
                                <option value="1">Jurong East</option>
                                <option value="2">Tanjong Pagar</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="services">
                            <Form.Label>Services: </Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Treatment Services</option>
                                <option value="1">Anti Aging</option>
                                <option value="2">Pigmentation</option>
                                <option value="3">Sensitive Skin</option>
                                <option value="4">Pimple</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="beautician">
                            <Form.Label>Preferred Beautician: </Form.Label>
                            <Form.Control type="beautician" />
                        </Form.Group>





                        {/* <Button mb-3 variant="primary" type="submit" onClick={(event) => {handleLogin(event)}}> */}
                        {/* onClick={(event) => {(event)}} */}
                        <Button mb-3 variant="primary" type="submit">
                            Make Appointment
                        </Button>
                        <br />

                    </Form>
                </Col>
            </Row>

        </Container>

    );
}

export default Appointments;
