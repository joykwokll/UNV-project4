import React from "react";
import AntiAging from "./AntiAgingProducts.jpeg"
import Pigmentation from "./PigmentationProducts.jpeg"
import SensitiveSkin from "./SensitiveSkinProducts.jpeg"
import Pimple from "./PimpleProducts.jpeg"
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


function Products(props) {
  let navigate = useNavigate();

  const handleAntiaging = () => {
    navigate("/antiaging");
  };

  const handlePigmentation = () => {
    navigate("/pigmentation");
  };

  const handleSensitiveSkin = () => {
    navigate("/sensitiveskin");
  };

  const handlePimple = () => {
    navigate("/pimple");
  };

  return (
    <div>
       <hr/>
      <Card style={{display: 'flex', flexDirection: 'row'}}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={AntiAging} />
        <Card.Body>
          <Card.Title>YOUTH ESSENTIA® RANGE</Card.Title>
          <Card.Text>
          Experience the future of youthfulness with Environ Skin Care new premium Vitamin STEPUP SYSTEM range. 
          </Card.Text>
          <Button onClick={handleAntiaging} variant="primary">ANTI AGING</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Pigmentation} />
        <Card.Body>
          <Card.Title>FOCUS CARETM RADIANCE+ RANGE</Card.Title>
          <Card.Text>
          Environ’s Focus Care Radiance+ Range helps to improve the appearance of uneven skin tone and visible sun damage.
          </Card.Text>
          <Button onClick={handlePigmentation} variant="primary">PIGMENTATION</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={SensitiveSkin} />
        <Card.Body>
          <Card.Title>SKIN ESSENTIA® RANGE</Card.Title>
          <Card.Text>
          Environ’s Skin Essentia® Range allows your skin to be beautifully radiant as it helps to assist in revealing the skin’s natural beauty.
          </Card.Text>
          <Button onClick={handleSensitiveSkin} variant="primary">SENSITIVE SKIN</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Pimple} />
        <Card.Body>
          <Card.Title>FOCUS CARETM CLARITY+</Card.Title>
          <Card.Text>
          Environ’s Focus CareTM Clarity+ Range contains various combinations of scientifically researches ingredients that assist in improving the appearance of breakout-prone skin. 
          </Card.Text>
          <Button onClick={handlePimple} variant="primary">PIMPLE</Button>
        </Card.Body>
      </Card>

      </Card>
    </div>
  );
}

export default Products;
