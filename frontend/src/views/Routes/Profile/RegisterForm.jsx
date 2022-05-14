import React from "react";
import { Form , Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterForm(props) {
  return (
    <div>
      <br/>
      <h3>Register An Account!</h3>
      <br/>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
      
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contact number</Form.Label>
          <Form.Control type="contact" placeholder="Contact number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Click me if you would like to subscribe to our weekly newsletter!" />
        </Form.Group>
        <Form.Text className="text-muted">
            We'll never share your details with anyone else.
          </Form.Text>
          <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  );
}

export default RegisterForm;

{
  /* // // import { useState } from "react";
// // import urlcat from "urlcat";
// // import { BACKEND } from "../../../utils/utils";
// // import {useNavigate} from 'react-router-dom'


// function Register() { */
}
//   const [error, setError] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // const [cfmPassword, setCfmPassword] =  useState("")
//   let navigate = useNavigate();

//   const registerAccount = (register) => {
//     const url = urlcat(BACKEND, `/api/users/register/${username}`);
//     fetch(url, {
//       method: "POST",
//       credentials: 'include',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(register),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           setError(data.error);
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const register = { username, email, password };
//     registerAccount(register);
//     setTimeout(()=> {
//       navigate("/login");
//      }, 1000);
//   };

//   return (
//     <body>
//       <h1>o</h1>
//       <h2>Register:</h2>
//       <>
//         <form onSubmit={handleSubmit}>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//           />
//           <br />
//           Email:
//           <input
//             type="text"
//             name="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//           <br />
//           Password:
//           <input
//             type="text"
//             name="email"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//           <p>{error}</p>
//           <br />
//           <button>Create</button>
//         </form>
//       </>
