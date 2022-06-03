import React from "react";
import { Card, Container, Row, Col, Image, ListGroup, List } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react'



function Admin(props) {

    const [adminAppointmentDetail, setAdminAppointmentDetail] = useState([]);



    //APPT GET ROUTE
    const handleAdminAppointment = () => {
        console.log("submitted")
        fetch("/api/admin/", {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("dataaaaa", data)
                setAdminAppointmentDetail([...data.adminAppointmentDetail])
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
                    {adminAppointmentDetail.map(a => {
                        return (
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Username: {a.username}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Appointment Details</Card.Subtitle>
                                        <ListGroup variant="flush">

                                            {a.date && <>
                                                <ListGroup.Item>Date: {a.date.slice(0, 10)}</ListGroup.Item>
                                                <ListGroup.Item>Time: {a.time}</ListGroup.Item>
                                                <ListGroup.Item>Outlet: {a.outlet}</ListGroup.Item>
                                                <ListGroup.Item>Services: {a.services}</ListGroup.Item>
                                                <ListGroup.Item>Beautician: {a.beautician}</ListGroup.Item></>}

                                        </ListGroup>
                                    </Card.Body>
                                </Card>



                            </Col>
                        )
                    })}
                </Row>

            </Container>
        </div>
    );
}

export default Admin;
