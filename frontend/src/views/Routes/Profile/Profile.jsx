import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Profile(props) {
  let navigate = useNavigate();

  const handleRegister = () => {
    navigate("/registerform");
  };

  const handleLogin = () => {
    navigate("/loginform");
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col> <div className="profile">
          <p>Profile</p>
          <button className="button" onClick={handleLogin}>Login</button>
          <br/>
          <button className="button" onClick={handleRegister}>Register</button>
        </div></Col>
        <Col></Col>
      </Row>
    </Container>

  );
}

export default Profile;
