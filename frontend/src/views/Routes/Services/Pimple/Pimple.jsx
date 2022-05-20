import React from "react";
import product from "./PimpleProducts.jpeg"
import intro from "./PimpleIntro.jpeg"
import treatment1 from "./Pimple01.jpeg"
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Pimple(props) {

  return (

    <div>

      <Container className="pt-5">

        <Row className="align-items-center">
          <Col xs = {6}>
            <p><b>THE CHALLENGES</b></p>
            <h3>As teenagers, one of the common skin issues are pimples or commonly known as acnes…</h3>
      
                {" "}
                It might started off with just one, and left untouched, it can spread to the 
                entire face full of red spots. You might tried many methods, from off the shelf 
                facial wash to friend’s recommendation or even parents advice.
                <br />
                <br />
                If none of them works, you might get into a situation where it is 
                depleting your emotions and confidence real fast. It’s also the best 
                ideal time to treat the skin condition with lots of tender loving care.
                <br />
                <br />
                Many adults would agree that the optimal timing to revitalise your problem 
                skin would be during the teenage years rather than in the 30s or 40s. 
                So, your timing is now! What are you waiting for?
         
          </Col>
          <Col>
            <Image className="mx-auto d-block" src={intro}/>{" "}
          </Col>
        </Row>
        <br/>
        <br/>
        <Row className="align-items-center">
          <Col>
            <h1>Clear up Your Skin</h1>
          </Col>
          <Col>
            
                {" "}
                Confidence-crushing breakouts of acnes and pimples will continue 
                to be an issue for many teenagers. However, out of all the skin conditions, 
                teenage pimples breakout are the easiest to deal with due to their young age.
                <br/>
                <br/>
                Yet, at the same time, it was during that few years that they are not 
                really interested in taking good care of their skin. If you thinking of 
                clearing up your skin in a hassle free and easy method, we have the solution for you.

           
          </Col>
        </Row>

        <br />
        <br />

        <Row className="align-items-center">
          <Col>
          <p><b>THE SOLUTIONS</b></p>
            <h3>FOCUS CARETM CLARITY+</h3>
            <Card className="aboutintro">
              <Card.Body>
                {" "}
                Environ’s Focus CareTM Clarity+ Range contains various combinations 
                of scientifically researches ingredients that may assist in improving 
                the appearance of breakout-prone skin. This comprehensive 3-phase system 
                offers a complete skincare solution that is tough on confidence-crushing 
                breakouts but easy on skin.
                <br />
                <br />
                Phase 1 is to clean with the Sebu-Wash Gel Cleanser & combat the appearance 
                of congestion with Cebu-Tone Clarifier.
                <br />
                <br />
                Phase 2 is to control using Sebu-Spot Blemish Gel to target spots. 
                Sebu-Lac Lotions assists in improving skin texture; and Sebu-ACE Oil 
                nourish skin with essential A, C and E.
                <br/>
                <br/>
                Phase 3 is to clear using Sebu-Clear Masque to help reduce the appearance 
                of confidence-crushing breakouts.

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
        


      </Container>
    </div>
  );
}

export default Pimple;
