import React from "react";
import product from "./SensetiveSkinProducts.jpeg"
import intro from "./SensetiveSkinIntro.jpeg"
import treatment1 from "./SensetiveSkin01.jpeg"
import treatment2 from "./SensetiveSkin02.jpeg"
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function SensetiveSkin(props) {

  return (

    <div>

      <Container className="pt-5">

      <h1 class="heading-1">THE CHALLENGES</h1>
        <div class="divider-1"> <span></span> </div>
        <hr/>

        <Row className="align-items-center">
          <Col xs = {6}>
            <h3>Sensitive skin conditions are getting more and more common…</h3>
      
                {" "}
                If you are feeling red, itchy or even painful skin symptoms, 
                then you might have sensitive skin or even in serious conditions, 
                eczema. Most ladies will leave it to chances; buying off the shelf 
                cleanser, or going to beauty salon, or some serious cases; visiting 
                the Singapore National Skin Center.
                <br />
                <br />
                One of the quick effective way they might use is steroid, 
                which is to suppress the condition temporary, however, 
                I am sure you’ll agree over the long term, steroid have
                many side effects. That’s why at UNV aesthetic, we only 
                believe in natural and non-evasive method to allow the skin 
                to heal by itself.
         
          </Col>
          <Col>
            <Image className="mx-auto d-block" src={intro}/>{" "}
          </Col>
        </Row>
        <br/>
        <br/>
        <h1 class="heading-1">WE ARE HERE FOR YOU</h1>
        <div class="divider-1"> <span></span> </div>
        <hr/>
        <Row className="align-items-center">
          <Col>
            <h1>Rejuvenate Your Skin</h1>
          </Col>
          <Col>
            
                {" "}
                Sensitive skin irritation issues have a wide 
                spectrum conditions happening all at the same time. 
                The triggers can be from food, pollutions, environments, 
                stress, diet, emotions, or even infections. One thing we 
                know based on our experience to quickly improve the problem
                is through our natural product ranges and machines combination.
                <br/>
                <br/>
                Over the long term, we educated our clients on their 
                lifestyle & diet to further rejuvenate their skin.
           
          </Col>
        </Row>

        <br />
        <br />
        <h1 class="heading-1">THE SOLUTIONS</h1>
        <div class="divider-1"> <span></span> </div>
        <hr/>

        <Row className="align-items-center">
          <Col>
       
            <h3>SKIN ESSENTIA® RANGE</h3>
            <Card className="aboutintro">
              <Card.Body>
                {" "}
                Environ’s Skin Essentia® Range allows your skin to be beautifully 
                radiant and healthylooking by using the right levels of natural vitamin A. 
                This entire series contains a combination of vitamin A, C and E, 
                powerful antioxidants and other essential ingredients to assist in 
                revealing the skin’s natural beauty.
                <br />
                <br />
                Instead of the usual treatments of IPL, lasers, or even 
                steroids; maybe you can permanently solve your sensitive skin 
                conditions.

              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Image className="mx-auto d-block" src={product} roundedCircle />{" "}
          </Col>
        </Row>

        <br />
        <div class="divider"><span></span><span>THE TREATMENTS</span><span></span></div>

        <Row className="align-items-center">
        <Col>
            <Image className="mx-auto d-block" src={treatment1}  />{" "}
          </Col>
          <Col>
          <span>01:</span>
            <h2> Environ DF II Treatment</h2>
          
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
          <span>02:</span>
            <h2>WishPro Plus+ Treatment</h2>
          
                {" "}
                WishPro Plus uses magnetic infusion technology to convert 
                magnetic pulses into an active energy field. This magnetic
                 field consist of Microcurrent, Red LED, Blue LED, or 
                 Magnetic Pulsetechnologies, in tandem with serum-infused 
                 treatment capsules, it generates the active serums into the 
                 skin.
                <br />
                <br />
                In order to resolve your sensitive skin condition naturally, 
                this non-evasive technology combine with personal serum-infused capsules, 
                delivers unparalleled results for your skin in just 15 minutes.
          </Col>
       
        </Row>


      </Container>
    </div>
  );
}

export default SensetiveSkin;
