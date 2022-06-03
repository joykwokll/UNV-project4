import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TipsIntro from "./TipsIntro.jpeg"


function Tips(props) {

  return (

    <div>

      <Container className="pt-5">
        <Row className="align-items-center">
          <Col>
            <Image className="mx-auto d-block" src={TipsIntro} />{" "}
          </Col>
          <Col>
        
        <h1 class="heading-1">Featured Beauty Tip</h1>
        <div class="divider-1"> <span></span> </div>
           
            <p>With the latest technology & proven aesthetic skin solutions, we have helped hundred of satisfied clients over 15 years. Give us an opportunity to revitalise your glowing skin once again!</p>
            <p>How Do You Treat Skin Pigmentation?</p>


          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Tips;
