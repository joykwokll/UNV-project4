import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";


function PasswordReset(props) {
    let navigate = useNavigate();

//   const {isLoggedIn} = props

//     const [username, setUsername] = useState("");
  
//     useEffect(() => { 
//         let loggedUser = sessionStorage.getItem("username") 
//         console.log(loggedUser);
//         setUsername(loggedUser);
//     }, [isLoggedIn]);

   
 

    const goBackToLogin = () => {
        navigate("/loginform");
    }


  return (
      <Container>
      {/* <Row className="text-center"><h1>Welcome to UNV</h1></Row>
      <Row className="text-center"><h2>Rejuvenate Your Skin With UNV Now!</h2> </Row> */}
      <Row className="text-center"><h3><Button variant="outline-dark" size="sm" onClick={goBackToLogin} >Log In</Button></h3> </Row>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reset your password here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={forgetEmail}
                onChange={event => setForgetEmail(event.target.value)}
                autoFocus
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
          {sentEmail
          ? <p><i>Email have been sent! Kindly check your inbox.</i></p> 
          : forgetEmailError}
         
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => {resetPassword(event)}}>
            Request reset
          </Button>
          
          
        </Modal.Footer>
      </Modal>

      </Container>

      

  );
}

export default PasswordReset;
