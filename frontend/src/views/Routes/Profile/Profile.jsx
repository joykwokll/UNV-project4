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
         <hr/>
      <Row className="row justify-content-md-center">
   
        <div className="profile">
        <h1 class="heading-1">Your healthy skin starts today</h1>
        <div class="divider-1"> <span></span> </div>
       
          
          <p>A journey to your healthy skin starts with the first step, and the first step in making a simple decision
            to give us an opportunity to serve you. Do fill in your details below to give us this chance!</p>
          <button className="button ml-2" onClick={handleLogin}>Login</button>
       
          <button className="button" onClick={handleRegister}>Register</button>
        </div>
   
      </Row>
    </Container>

  );
}

export default Profile;
