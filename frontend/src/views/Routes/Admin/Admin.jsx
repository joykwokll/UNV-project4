import React from "react";
import { Card, Container, Row, Col, Image, ListGroup, List } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react'



function Admin(props) {

    const [adminAppointmentDetail, setAdminAppointmentDetail] = useState({
        date: "",
        outlet: "",
        services: "",
        time: "",
        username: ""
    });

    

    //APPT GET ROUTE
    const handleAdminAppointment = () => {
        console.log("submitted")
        fetch("/api/appointment/", {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("dataaaaa", data)
                setAdminAppointmentDetail({ ...data.adminAppointmentDetail })
            })
    }
    useEffect(() => {
        handleAdminAppointment()
    }, [])

    useEffect(() => {
        console.log(adminAppointmentDetail)
    }, [adminAppointmentDetail])



    return (
        <div>

            <Container className="pt-5">
                <Row className="align-items-center">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Recent Appointments Made</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Appointment Details</Card.Subtitle>
                                <ListGroup variant="flush">
                                    {adminAppointmentDetails.date && <>
                                        <ListGroup.Item>Date: {adminAppointmentDetail.date.slice(0, 10)}</ListGroup.Item>
                                        <ListGroup.Item>Time: {adminAppointmentDetail.time}</ListGroup.Item>
                                        <ListGroup.Item>Outlet: {adminAppointmentDetail.outlet}</ListGroup.Item>
                                        <ListGroup.Item>Services: {adminAppointmentDetail.services}</ListGroup.Item>
                                        <ListGroup.Item>Beautician: {adminAppointmentDetail.beautician}</ListGroup.Item></>}

                                </ListGroup>
                            </Card.Body>
                        </Card>



                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Admin;
