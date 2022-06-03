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
      <Col className="row justify-content-md-center">
   
        <div className="profile">
        <h1 class="heading-1">Get in touch with your skin expert</h1>
        <div class="divider-1"> <span></span> </div>
       
          
          <p>Want to resolve your current skin issues? Stay in touch with your 
            skin expert on the latest updates for your skin care therapy. 
            <br/>
            <br/>
            Sign up for your beauty tips exclusively just for you</p>
          <button className="button ml-2" onClick={handleLogin}>Login</button>
       
          <button className="button" onClick={handleRegister}>Register</button>
        </div>
   
      </Col>
    </Container>

  );
}

export default Profile;
