import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Jurong from "./JurongEast.jpg"
import TP from "./TanjongPagar.jpg"

function ContactUs(props) {

  return (

    <div>
        <div class="divider-1"> <span></span> </div>
        <hr/>
      <Container className="pt-5">
      <h1 class="heading-1">LOCATE US</h1>
        <Row className="align-items-center">
          <Col>
     
            <h1>Jurong East Branch</h1>
            <Image className="mx-auto d-block" src={Jurong} />{" "}
          </Col>
          <Col>
            <p><b>Address:</b></p>
            <p>135 Jurong Gateway Rd #02-323
              Singapore 600135</p>

            <p><b>Phone:</b></p>
            <p>Tel: 6562 6126</p>

            <p><b>Email:</b></p>
            <p>unvwendy@yahoo.com</p>

          </Col>
        </Row>

        <br />
        <br />
        <Row className="align-items-center">
          <Col>
            <h1>Tanjong Pagar Branch</h1>
            <Image className="mx-auto d-block" src={TP} />{" "}
          </Col>
          <Col>
            <p><b>Address:</b></p>
            <p>Blk 1 Tanjong Pagar Plaza Tanjong 
              Pagar Rd #02-28 Singapore 082001</p>

            <p><b>Phone:</b></p>
            <p>Tel: 6444 9118</p>

            <p><b>Email:</b></p>
            <p>unvwendy@yahoo.com</p>

          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default ContactUs;
