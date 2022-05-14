import React from "react";
import { Form , Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm(props) {
  return (
    <div>
      <br/>
      <h3>Login to your account!</h3>
      <br/>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username / Email / Contact</Form.Label>
          <Form.Control type="username" placeholder="Username / Email / Contact" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  );
}

export default LoginForm;
