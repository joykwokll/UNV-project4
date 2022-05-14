import React from "react";
import "./About.css"
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function About(props) {
  return (
    <div>
      <Card className="aboutintro">
        <Card.Body>
          {" "}
          I am Wendy Weng. I have been dealing with skin care and cosmetic
          products for many years. I set up my own UNV Beauty Therapy & Slimming
          salon in 2005 as I felt there was a need to provide better advice for
          those with common yet difficult to deal skin problems and want to
          remain youthful with radiant skin. Knowledge and advice passed on to
          these people were superficial as the main concern was product sale
          targets. In addition, due to the nature of over-the-counter
          conditions, most of the skin care products contain preservatives to
          allow for a longer shelf-life. I own my confidence mainly from South
          Africa skin specialist and surgeon, Dr Des Fernandes. Dr Des’ Environ®
          medical treatment and skin care products are both revolutionary and
          innovative, especially with his DF Machine® and high Vitamin A regime.
          (And I like Environ® skin care products as they do not pass through
          X-ray scan during the course of export/import shipment.) To learn more
          about Dr Des Fernandes, you may want to access the websites:
          www.drdes.co.za or www.EnvironSkinCare.com
        </Card.Body>
      </Card>

    </div>
  );
}

export default About;
