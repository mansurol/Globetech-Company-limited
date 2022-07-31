import React from 'react';
import './Mainpage.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import {Link} from 'react-router-dom'
const Mainpage = () => {
    return (
        <div className='Coloring'>
            <Navbar expand="lg">
  <Container>
  <Navbar.Brand as={Link} to="/home"><h2  className='contentColor'>Mansurol-islam</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto ">
      <div className='d-flex PRight'>
        <Nav.Link as={Link} to="/home" className='menuContent active'><b>Home</b></Nav.Link >
       <Nav.Link as={Link} to="/services" className='menuContent'><b>Services</b></Nav.Link>
       </div>
        <Nav.Link as={Link} to="/login" className='menuContent'><b>Login</b></Nav.Link>
    
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Mainpage;