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
            <p><b>Featured Beauty Tip</b></p>
            <p>How Do You Treat Skin Pigmentation?</p>


          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Tips;
