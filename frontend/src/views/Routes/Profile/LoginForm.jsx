import React from "react";
import { Form , Button, Row, Col, Alert, Modal} from "react-bootstrap";
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

function LoginForm(props) {
  let navigate = useNavigate();
  const [usernameOrEmailOrContact,setUsernameOrEmailOrContact] = useState("")
  const [password,setPassword] = useState("")
  const [forgetEmail, setForgetEmail] = useState("")
  const [sentEmail, setSentEmail] = useState(false)
  const [forgetEmailError, setForgetEmailError] = useState("")


  const [error, setError] = useState("")

  const {setLogin} = props;
  //check if denied or accepted (frontend)
  //check with database if have such user, pw same (backend)

  const resetPassword = (event) => {
    event.preventDefault();
    fetch("/api/users/passwordreset", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        redirectURL : window.location.origin,
        email: forgetEmail
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "FAILED") {
          setForgetEmailError(data.message);
        }
        else {
          setSentEmail(true)
        }
      }) 
      
      .catch((error) => {
        console.log('hi');
        // console.log(error)
      })
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("submitted")
    fetch("/api/users/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ usernameOrEmailOrContact: usernameOrEmailOrContact, password: password })
    })
        .then((res) => {
          console.log("response2",res)
          return res.json()
        })
        .then((data) => {
          console.log("data",data)

          if (data.successful) {
            sessionStorage.setItem("jwt",data.jwt)
            sessionStorage.setItem("username", data.username)
            
            setLogin(true)
            navigate("/loggedin");
          } else {
            setError(<>
              {[
                'danger',
              ].map((variant) => (
                <Alert key={variant} variant={variant} className="mt-3">
                  The Username or Password is invalid!
                </Alert>
              ))}
            </>)
            .catch((error) => {
              console.log(error)
              console.log('test')
              setError(<>
                {[
                  'danger',
                ].map((variant) => ( 
                  <Alert key={variant} variant={variant} className="mt-3">
                    The Username or Password is invalid!
                  </Alert>
                ))}
              </>)
            })
          }
        })
              
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

    <div className="m-5">
      <br/>
      <h3>Login to your account!</h3>
      <br/>
      <Row>
        <Col>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username / Email / Contact </Form.Label>
          <Form.Control type="username" placeholder="Username / Email / Contact" value={usernameOrEmailOrContact} onChange={(event) => {setUsernameOrEmailOrContact(event.target.value)}} />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => {setPassword(event.target.value)}} />
        </Form.Group>

        <Button mb-3 variant="primary" type="submit" onClick={(event) => {handleLogin(event)}}>
          Submit
        </Button>
        <br/>
       <p> {error} </p>
      </Form>
      </Col>
      </Row>
      <Button variant="outline-danger" size="sm" onClick={handleShow}>
        Forget Your Password?
      </Button>
        
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
    </div>
  );
}

export default LoginForm;
