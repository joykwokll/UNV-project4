import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"
import { Container, Row, Col } from "react-bootstrap";
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
        <Col> <div className="profile">
          <h3>Your healthy skin starts today</h3>
          <p>A journey to your healthy skin starts with the first step, and the first step in making a simple decision
            to give us an opportunity to serve you. Do fill in your details below to give us this chance!</p>
          <button className="button" onClick={handleLogin}>Login</button>
          <br />
          <button className="button" onClick={handleRegister}>Register</button>
        </div></Col>
   
      </Row>
    </Container>

  );
}

export default Profile;
