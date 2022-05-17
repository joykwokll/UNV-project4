import React from "react";
import "./About.css";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import founder from "./founder.jpg"

function About(props) {
  return (
    <div>
      <Container className="pt-5">
        <Row className="align-items-center">
          <Col>< Image className="mx-auto d-block" src = {founder} roundedCircle/> </Col>
          <Col xs={8}>
            <h1>The Founder</h1>
            <Card className="aboutintro">
              <Card.Body>
                {" "}
                I am Wendy Weng. I have been dealing with skin care and cosmetic
                products for many years. I set up my own UNV Beauty Therapy &
                Slimming salon in 2005 as I felt there was a need to provide
                better advice for those with common yet difficult to deal skin
                problems and want to remain youthful with radiant skin.
                Knowledge and advice passed on to these people were superficial
                as the main concern was product sale targets. In addition, due
                to the nature of over-the-counter conditions, most of the skin
                care products contain preservatives to allow for a longer
                shelf-life. 
                <br/>
                <br/>
                I own my confidence mainly from South Africa skin
                specialist and surgeon, Dr Des Fernandes. Dr Des’ Environ®
                medical treatment and skin care products are both revolutionary
                and innovative, especially with his DF Machine® and high Vitamin
                A regime. (And I like Environ® skin care products as they do not
                pass through X-ray scan during the course of export/import
                shipment.) 
                <br/>
                <br/>
                To learn more about Dr Des Fernandes, you may want to
                access the websites: www.drdes.co.za or www.EnvironSkinCare.com
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default About;