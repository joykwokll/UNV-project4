import React from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword(props) {
    let navigate = useNavigate();
  const {id,resetString} = useParams();
//   const {isLoggedIn} = props

//     const [username, setUsername] = useState("");
  
//     useEffect(() => { 
//         let loggedUser = sessionStorage.getItem("username") 
//         console.log(loggedUser);
//         setUsername(loggedUser);
//     }, [isLoggedIn]);
  useEffect(()=>{
    console.log("ID",id)
  })
   
 

    const goBackToLogin = () => {
        navigate("/loginform");
    }


  return (
      <Container>
      {/* <Row className="text-center"><h1>Welcome to UNV</h1></Row>
      <Row className="text-center"><h2>Rejuvenate Your Skin With UNV Now!</h2> </Row> */}
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password </Form.Label>
          <Form.Control type="newPassword" placeholder="New Password"  />
        </Form.Group>
        {/* value={" "} onChange={(event) => {(event.target.value)}} */}
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="cfmPassword" placeholder="Confirm Password"/>
        </Form.Group>

        {/* <Button mb-3 variant="primary" type="submit" onClick={(event) => {handleLogin(event)}}> */}
        {/* onClick={(event) => {(event)}} */}
        <Button mb-3 variant="primary" type="submit" >
          Change Password
        </Button>
        <br/>

      </Form>
      <Row className="text-center"><h3><Button variant="outline-dark" size="sm" onClick={goBackToLogin} >Log back in~</Button></h3> </Row>

      </Container>

      

  );
}

export default ResetPassword;
