import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <Navbar bg="danger" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="text-white ms-3 text-decoration-none">
              🏠Home
            </Link>
            <Link to="/contacto" className="text-white ms-3 text-decoration-none">
              📒Contacto
            </Link>
            </Nav>
            <Nav>
            <Nav.Link>
              <Link to="/home" className="text-white ms-3 text-decoration-none">
              Happy Cake🍰
            </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navegacion