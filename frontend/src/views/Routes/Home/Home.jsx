import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import award1 from "./Award1.png";
import award2 from "./Award2.png";
import award3 from "./Award3.png";
import homebg from "./homebg.jpg"

function Home(props) {
  let navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  return (

    <div>
      <Container className="pt-5" >
        <Row>

          <Col className="wrapper"> <div>
          <img src={homebg} alt="sunshine" width="1600" height="800" style={{'vertical-align': 'middle', 'margin': '-25px 0px 0px -155px'}}/>
            {/* <Image className="mx-auto d-block" src={homebg} />{" "} */}
            <p style={{'margin': '-155px 0px 0px -355px'}} className="textinfront">
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
            </p>

          </div></Col>
          <br />
          <br />
          <br />

          <br />
          <br />


          <Row>
            <div class="divider"><span></span><span>Our Promise To You</span><span></span></div>

            <p>
              Our success will only be achieved after seeing our satisfied customers regaining back their confidence and happiness. The awards are second to our testaments that we are here for the long term wanting to serve you.
              <br />
              <br />
              <br />
            </p>

          </Row>
          <Row align-self-center >

            <Col md="4">
              <Image className="mx-auto d-block" src={award1} roundedCircle />{" "}
              <p><i>Awarded Singapore Heartland Enterprise Star Award 2016/2017/2018 Best Customer Service</i></p>
            </Col>
            <Col md="4"><Image className="mx-auto d-block" src={award2} roundedCircle />{" "}
              <p><i>Received 2012/2013 Singapore Trusted Brand</i></p></Col>
            <Col md="4"> <Image className="mx-auto d-block" src={award3} roundedCircle />{" "}
              <p><i>Awarded Asia Pacific Beauty, Slimming & Hair Trusted Brands 2011</i></p></Col>
          </Row>
          <Col></Col>
        </Row>


      </Container>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Acme&family=Londrina+Solid:wght@300;400&family=Quicksand:wght@300&display=swap');
      </style>
    </div>

  );
}

export default Home;
