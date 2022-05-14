import React from "react";
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

function HeaderBar(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/home">UNV</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to ="/antiaging">Anti Aging</NavDropdown.Item>
                <NavDropdown.Item as={Link} to ="/pigmentation">Pigmentation</NavDropdown.Item>
                <NavDropdown.Item as={Link} to ="/sensitiveskin">Sensitive Skin</NavDropdown.Item>
                <NavDropdown.Item as={Link} to ="/pimple">Pimple</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/beautytips">Beauty Tips</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/joinus">Join Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderBar;
