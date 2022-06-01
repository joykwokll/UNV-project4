import React from "react";
import { Container, Row, Col, Button, Modal, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword(props) {
  let navigate = useNavigate();
  const [error, setError] = useState("")
  const { id, resetString } = useParams();
  const [newPassword,setNewPassword] = useState("")
  const [cfmNewPassword,setCfmNewPassword] = useState("")
  //   const {isLoggedIn} = props

  //     const [username, setUsername] = useState("");

  //     useEffect(() => { 
  //         let loggedUser = sessionStorage.getItem("username") 
  //         console.log(loggedUser);
  //         setUsername(loggedUser);
  //     }, [isLoggedIn]);
  useEffect(() => {
    console.log("ID", id)
  })


  const handleResetPassword = (event) => {
    event.preventDefault();
    console.log("submitted")
    fetch("/api/users/resetPassword", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          newPassword: newPassword, 
          resetString,
          _id: id 
        })
    })
        .then((res) => {
          console.log("response2",res)
          return res.json()
        })
        .then((data) => {
          console.log("data",data)
           if (data.status === "SUCCESS") {
            setError(<>
              {[
                'success',
              ].map((variant) => (
                <Alert key={variant} variant={variant} className="mt-3">
                  Password have been changed succesfully~
                </Alert>
              ))}
            </>)
          }
          else {
            if (newPassword !== cfmNewPassword) {
              setError(<>
               {[ 
                'danger',
              ].map((variant) => ( 
                <Alert key={variant} variant={variant} className="mt-3">
                  Password and Confirm password does not match! Please re-enter.
                </Alert>
              ))}
            </>)
            }}
        })
              
      }


  const goBackToLogin = () => {
    navigate("/loginform");
  }

  return (
    <Container>
      <br />
      <Row>
        <Col>
          {/* <Row className="text-center"><h1>Welcome to UNV</h1></Row>
      <Row className="text-center"><h2>Rejuvenate Your Skin With UNV Now!</h2> </Row> */}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>New Password </Form.Label>
              <Form.Control type="newPassword" placeholder="New Password" value={newPassword} onChange={(event) => {setNewPassword(event.target.value)}} />
            </Form.Group>
            {/* value={" "} onChange={(event) => {(event.target.value)}} */}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="cfmPassword" placeholder="Confirm Password" value={cfmNewPassword} onChange={(event) => {setCfmNewPassword(event.target.value)}} />
            </Form.Group>

            {/* <Button mb-3 variant="primary" type="submit" onClick={(event) => {handleLogin(event)}}> */}
            {/* onClick={(event) => {(event)}} */}
            <Button mb-3 variant="primary" type="submit" onClick={(event) => {handleResetPassword(event)}}>
              Change Password
            </Button>
            {error}
            <br />

          </Form>
        </Col>
      </Row>
      <Row className="text-center"><h3><Button variant="outline-dark" size="sm" onClick={goBackToLogin} >Log back in~</Button></h3> </Row>


    </Container>



  );
}

export default ResetPassword;
