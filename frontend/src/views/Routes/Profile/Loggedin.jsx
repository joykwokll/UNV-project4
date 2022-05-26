import React from "react";
import "./Profile.css"
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Profile(props) {

  return (
    <Container>
      <Row>
        <Col> <div className="profile">
          <h3>Hi! username</h3>
          <p>A journey to your healthy skin starts with the first step, and the first step in making a simple decision
            to give us an opportunity to serve you. Do fill in your details below to give us this chance!</p>
    
        </div></Col>
   
      </Row>
    </Container>

  );
}

export default Profile;
