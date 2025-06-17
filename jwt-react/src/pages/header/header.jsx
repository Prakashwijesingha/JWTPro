import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
// Bootstrap CSS import is intentionally omitted here because global styles are imported elsewhere in the project.
import './header.css';


const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Not-LoggedIn</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login" className='nav-link'>Login</Nav.Link>
            <Nav.Link as={Link} to="/register" className='nav-link'>Signup</Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

