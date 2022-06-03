import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(props) {
  let navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  return (

    <Container className="pt-5" >
      <Row>
        <Col> <div>
          <h3>
            UNV Aesthetics
          </h3>
          <h2>
            More than 18 years of
            <br />
            beauty experiences &
            <br />
            serving thousand of customers.
          </h2>

          <button className="button" onClick={handleProfile}>Sign up now!</button>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Acme&family=Londrina+Solid:wght@300;400&family=Quicksand:wght@300&display=swap');
          </style>
        </div></Col>
        <br/>
        <hr/>
        <br/>
        <Col></Col>
      </Row>


    </Container>



  );
}

export default Home;
