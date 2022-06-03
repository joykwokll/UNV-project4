import React from "react";
import "./Profile.css"
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";


function Profile(props) {

  const {isLoggedIn} = props

    const [username, setUsername] = useState("");
  
    useEffect(() => { 
        let loggedUser = sessionStorage.getItem("username") 
        console.log(loggedUser);
        setUsername(loggedUser);
    }, [isLoggedIn]);

    // let loggedoutUser = () => {
    //     sessionStorage.removeItem("username")
    //     sessionStorage.removeItem("jwt")
    
    //   }

   
  let navigate = useNavigate();

    const editProfile = () => {
        navigate("/loggedinprofile");
    }


  return (
    
      <Container>
        <hr/>
        <br/>
      <Row className="text-center"><h1>Welcome {username} ~ </h1></Row>
      <Row className="text-center"><h2>Rejuvenate Your Skin With UNV Now!</h2> </Row>
      <Row className="text-center"><h3> <Button variant="outline-dark" size="sm" onClick={editProfile} >Edit profile</Button></h3> </Row>
      <Row className="text-center"><h3> <Button variant="outline-dark" size="sm" onClick={editProfile} >Make an appointment</Button></h3> </Row>
      </Container>

  );
}

export default Profile;
