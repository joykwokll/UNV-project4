import React from "react";
import "./About.css";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import founder from "./founder.jpg";
import partner from "./partner.jpeg";
import award1 from "./Award1.png";
import award2 from "./Award2.png";
import award3 from "./Award3.png";


function About(props) {
  return (
    <div>
      <Container className="pt-5">
      <h1 class="heading-1">The Founder</h1>
        <div class="divider-1"> <span></span> </div>
        <hr/>
        <Row className="align-items-center">
          <Col>
            <Image className="mx-auto d-block" src={founder} roundedCircle />{" "}
          </Col>
          <Col xs={8}>
           
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
                <br />
                <br />
                I own my confidence mainly from South Africa skin specialist and
                surgeon, Dr Des Fernandes. Dr Des’ Environ® medical treatment
                and skin care products are both revolutionary and innovative,
                especially with his DF Machine® and high Vitamin A regime. (And
                I like Environ® skin care products as they do not pass through
                X-ray scan during the course of export/import shipment.)
                <br />
                <br />
                To learn more about Dr Des Fernandes, you may want to access the
                websites: www.drdes.co.za or www.EnvironSkinCare.com
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <div class="divider"><span></span><span>ABOUT</span><span></span></div>
        <Row className="align-middle">
          <Col>
            <h1>About UNV Aesthetics</h1> In 2004, UNV Aesthetics was born. The
            first store started in Jurong East Central with only 200 sqft tiny
            space.
            <br />
            <br />
            In 2005, we decided to purchase over the entire shop over 1,000
            sqft. In 2014, we had our 2nd outlet at Tanjong Pagar. With more
            than 15 years of experiences, we served more than 1,000+ customers
            from various walks of life.
            <br />
            <br />
            We are thankful for the long lasting group of customers, and they
            continuously referred their family members and friends to us.
            <br />
            <br />
            We love to reward and express our gratitude to our loyal customers,
            and since 2012, we are most probably the first and only beauty salon
            in Singapore that organised Annual Dinner for all our customers
          </Col>
          </Row>
          <br />
          <br />
          <Row className="align-items-center">
          <h1 class="heading-1">Our Partner</h1>
        <div class="divider-1"> <span></span> </div>
        <hr/>
            <Col>
              <Image className="mx-auto d-block" src={partner} roundedCircle />{" "}
            </Col>
            <Col xs={8}>
              <h1>Dr Des Fernandes</h1>
              <Card>
                <Card.Body>
                  {" "}
                  Dr Des's new range of face creams are said to be more intense
                  than the original formula to fight anti-ageing, and also skin
                  problems such as couperose, rosacea and scarring. Peptides -
                  active protein molecules that tell cells how to react and what
                  to do - have been added to the combination of vitamin A, C and
                  E, resveratrol and beta carotene.
                  <br />
                  <br />
                  He has also developed an anti-ageing machine that uses
                  iontophoresis (an electric charge) and sonophoresis
                  (low-frequency ultrasound waves) to increase vitamin
                  penetration, and the medical skin-needling tool to reduce
                  scarring, lines and wrinkles.
                  <br />
                  <br />
                  He has performed his needling technique on over 2,000 people,
                  himself included. “Needling is good for every single type of
                  skin,” he says. “We treat patients once a week for six weeks,
                  and you get better for up to a year. We’ve set up a factory
                  under the skin to make more collagen and elastin. It is the
                  first treatment in the world to do that.”
                </Card.Body>
              </Card>
            </Col>
            </Row>
            <br />
        <br />
        <h1 class="heading-1">Awards</h1>
        <div class="divider-1"> <span></span> </div>
        <hr/>
        
        <Row>
        <h1>Our Promise To You</h1>
        <p>
        Our success will only be achieved after seeing our satisfied customers regaining back their confidence and happiness. The awards are second to our testaments that we are here for the long term wanting to serve you.
        <br/>
        <br/>
        <br/>
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
      </Container>
    </div>
  );
}
export default About;
