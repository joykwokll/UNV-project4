import React from "react";
import product from "./PigmentationProducts.jpeg"
import intro from "./PigmentationIntro.jpeg"
import treatment1 from "./Pigmentation01.jpeg"
import treatment2 from "./Pigmentation02.jpeg"
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Pigmentation(props) {

  return (

    <div>

      <Container className="pt-5">

        <Row className="align-items-center">
          <Col xs = {6}>
            <p><b>THE CHALLENGES</b></p>
            <h3>Singapore Sun UV Exposure <br/> Causes Pigmentation</h3>
      
                {" "}
                As you might guess, pigmentation is caused by sun exposure, 
                which penetrate deep into your skin and causing ageing. 
                The sun UVA stimulates your pigment cells called Melanocytes 
                to develop the pigment called Melanin. It may take up to 
                10 - 20 years to develop.
                <br />
                <br />
                Most ladies are very troubled by this unwanted dark patches, 
                and it might even cause you to develop low self esteem. 
                Many had tried lasers, or even creams that contain steroids 
                that can caused further harm to your delicate skin.
         
          </Col>
          <Col>
            <Image className="mx-auto d-block" src={intro}/>{" "}
          </Col>
        </Row>
        <br/>
        <br/>
        <Row className="align-items-center">
          <Col>
            <h1>Revitalise Your Skin</h1>
          </Col>
          <Col>
            
                {" "}
                If you discover pigmentation on your facial skin, 
                it might take up to 10 - 20 years to develop on your 
                visible skin layer. Combining the advanced Focus Care 
                Radiance+ Range and our advance machine; you might 
                effectively see results in about 6 - 12 sessions of treatment. 
                All our treatments are non-evasive, leaving you very 
                little or almost no down time at all, allowing your skin 
                to glow once again.
           
          </Col>
        </Row>

        <br />
        <br />

        <Row className="align-items-center">
          <Col>
          <p><b>THE SOLUTIONS</b></p>
            <h3>FOCUS CARETM RADIANCE+ RANGE</h3>
            <Card className="aboutintro">
              <Card.Body>
                {" "}
                Environ’s Focus Care Radiance+ Range contains various 
                combination of scientifically research ingredients; 
                a potent blend of vitamins and botanicals that assist 
                in targeting the root causes of skin discolouration, 
                pigmentation and helps to improve the appearance of 
                uneven skin tone and visible sun damage.
                <br />
                <br />
                By combining the revolutionary Mila-Smart System with
                 your daily vitamin STEP-UP SYSTEM routine, your skin 
                 could look even more evenly radiant and healthy.

              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Image className="mx-auto d-block" src={product} roundedCircle />{" "}
          </Col>
        </Row>

        <br />

        <Row className="align-items-center">
        <Col>
            <Image className="mx-auto d-block" src={treatment1}  />{" "}
          </Col>
          <Col>
            <h1>01: <br/> Environ DF II Treatment</h1>
          
                {" "}
                The DF II machine uses specific Environ ingredients 
                such as vitamin A, C and growth factors to give enhanced 
                results. It helps with the penetration of the active 
                vitamins and essential growth factors into the skin and 
                provides fast, effective results.
                <br />
                <br />
                The treatments are totally painless, relaxing, 
                comfortable but extremely effective. The twenty minutes 
                pulsed Iontophoresis is equal to seven hours massage and 
                five minutes of low frequency Sonophoresis is equal to 
                700 hours massage.
                <br />
                <br />
                We had helped hundreds of aging skin customers, resulting 
                in rejuvenated looking skin with brighter and more even skin tone.
          </Col>
       
        </Row>
        
        <br/>
        <br/>

        <Row className="align-items-center">
        <Col>
            <Image className="mx-auto d-block" src={treatment2}  />{" "}
          </Col>
          <Col>
            <h1>02: <br/>SharpLight Treatment</h1>
          
                {" "}
                SharpLight developed two technological advancement 
                for treatment of pigmented lesions - 
                Dynamic Pulse Control (DPC) and Q-Switched Nd: YAG laser. 
                The light energy is absorbed by the melanin chromophores 
                present in the lesion.
                <br />
                <br />
                The energy causes the chromophores to breakdown, 
                and the body’s natural mechanism clear way the pigmentation. 
                As a result, the skin surface becomes clearer and blemishfree.
                <br />
                <br />
                It is very effective for sun spots, pigmentation freckles 
                and uneven skin tone. Results can be seen as fast as the 
                first treatment or between 6 - 10 sessions. It is non-evasive, 
                and leaving you little or no down time at all.
          </Col>
       
        </Row>


      </Container>
    </div>
  );
}

export default Pigmentation;
