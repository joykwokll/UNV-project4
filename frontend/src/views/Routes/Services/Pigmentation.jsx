import React from "react";
// import product from "./AntiAgingProducts.jpeg"
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Pigmentation(props) {

  return (

    <div>

      <Container className="pt-5">
      <Row className="align-items-center">
          <Col>
          <h1>  Being Young Again </h1>
          </Col>
          <Col>
            <Card className="aboutintro">
              <Card.Body>
                {" "}
                Aging of the skin is a fact of human life, but understanding the nature of how skin works
                helps us to slow down the visible effects of the inevitable aging process.
                <br />
                Delaying the effects of the aging process, can be helped by the regular application of
                optimal levels of topical vitamin A, peptides and antioxidants, together with our machine
                to effectively see results in 6 - 10 sessions of treatment.
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br/>

        <Row className="align-items-center">
          <Col>
            <h1>YOUTH ESSENTIA® RANGE</h1>
            <Card className="aboutintro">
              <Card.Body>
                {" "}
                Experience the future of youthfulness with Environ Skin Care
                new premium Vitamin STEPUP SYSTEM range. It contains a highly
                effective combination of powerful vitamins, antioxidants, and
                peptides that help to create healthier looking skin that glows
                with youthful radiance.
                <br />
                <br />
                Environ skin care products have been formulated to combat and
                relieve the harmful effects of today’s harsh environmental changes,
                specially pollution and ever increasing doses of radiation from the
                tropical sun. Added to these are the modern-day effects of social
                and work stresses and poor diet.

              </Card.Body>
            </Card>
          </Col>
          {/* <Col>
            <Image className="mx-auto d-block" src={product} roundedCircle />{" "}
          </Col> */}
        </Row>

        <br />

        
      </Container>
    </div>
  );
}

export default Pigmentation;
