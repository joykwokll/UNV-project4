import React from "react";
import product from "./AntiAgingProducts.jpeg"
import intro from "./AntiAgingIntro.jpeg"
import treatment1 from "./AntiAging01.jpeg"
import treatment2 from "./AntiAging02.jpeg"
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AntiAging.css"

function AntiAging(props) {
 

  return (
    <div>
      <Container className="pt-5">
      
        <h1 class="heading-1">THE CHALLENGES</h1>
        <div class="divider-1"> <span></span> </div>
        <hr/>

        <Row className="align-items-center">
          <Col xs={6}>
         
            <h3>Time will always be cruel to your skin</h3>

            {" "}
            As we age, our skin will become dull and full of wrinkles.
            Does it have to be that way? Combined with our sunny and humid
            Singapore weather, it will only create more problems for your
            aging skin. Most women would be so busy with their family,
            career, children; and neglected their own skin.
            <br />
            <br />
            Over 5, 10 or even 20 years of leaving your skin to chances
            will be the worst decision ever. For more than 15 years,
            we helped hundred of women like yourself to revitalise their
            dull looking skin. Not only they look 5 - 10 years younger
            their age, they regained their confidence & compliments
            from their love ones.
            <link rel="stylesheet" href="css/animate.css"></link>
            <script src="js/wow.min.js"></script>
              <script>
              new WOW().init();
              </script>


          </Col>
          <Col>
            <Image className="mx-auto d-block" src={intro} />{" "}
          </Col>
        </Row>
        <br />
        <br />
        <h1 class="heading-1">WE ARE HERE FOR YOU</h1>
        <div class="divider-1"> <span></span> </div>
        <hr/>
        <Row className="align-items-center">
          <Col>
            <h1>  Being Young Again </h1>
          </Col>
          <Col>

            {" "}
            Aging of the skin is a fact of human life, but understanding the nature of how skin works
            helps us to slow down the visible effects of the inevitable aging process.
            {" "}
            Delaying the effects of the aging process, can be helped by the regular application of
            optimal levels of topical vitamin A, peptides and antioxidants, together with our machine
            to effectively see results in 6 - 10 sessions of treatment.

          </Col>
        </Row>
        <br />
        <br />
        <h1 class="heading-1">THE SOLUTIONS</h1>
        <div class="divider-1"> <span></span> </div>
        <hr/>
        <Row className="align-items-center">
          <Col>
         <br/>
            <h3>YOUTH ESSENTIA® RANGE</h3>
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
          <Col>
            <Image className="mx-auto d-block" src={product} roundedCircle />{" "}
          </Col>
        </Row>

        <br />
        <div class="divider"><span></span><span>THE TREATMENTS</span><span></span></div>

        <Row className="align-items-center">
          <Col>
            <Image className="mx-auto d-block" src={treatment1} />{" "}
          </Col>
          <Col>
          <span>01:</span>
            <h2>Environ DF II Treatment</h2>

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
            <Image className="mx-auto d-block" src={treatment2} />{" "}
          </Col>
          <Col>
          <span>02:</span>
            <h2>INDIBA Treatment</h2>

            {" "}
            Indiba is a non-invasive treatment which involves the
            technology of its patented 448 kHz monopolar radio frequency
            energy deep into the skin’s dermis & sub-dermal layer without
            damaging the external layer of skin.
            <br />
            <br />
            This energy heats up the collagen and layer of skin that
            produces collagen; thus tightens the skin which appears
            firmer and younger. The whole process only takes 45 minutes
            and there are little or no down time.
            <br />
            <br />
            Some may see results in one session, while others may
            requires a few treatments.
          </Col>

        </Row>




      </Container>
    </div>
  );
}

export default AntiAging;
