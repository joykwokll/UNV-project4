import React from "react";
import { Form , Button, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm(props) {
  
  const handleLogin = () => {
    console.log("submitted")
    fetch("/api/users/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: "Joy Kwok", password: "12345" })
    })
        .then((res) => res.json())
        .then((res) => console.log(res));
}
  
  return (
    <div>
      <br/>
      <h3>Login to your account!</h3>
      <br/>
      <Row>
        <Col>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username / Email / Contact </Form.Label>
          <Form.Control type="username" placeholder="Username / Email / Contact" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={() => {handleLogin}}>
          Submit
        </Button>
      </Form>
      </Col>
      </Row>

    </div>
  );
}

export default LoginForm;
