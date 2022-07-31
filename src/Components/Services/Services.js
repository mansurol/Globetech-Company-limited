import React from 'react';
import './Services.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Img1 from '../Img/RC-EDF-Jet-Airplane-MINI-L39-50mm-Remote-Control-Aircraft-Toy.jpg_Q90.jpg_.webp'
import Courses from './Courses/Courses';
const Services = () => {
    return (
        <div className='Coloring '>
            <Container>
            <div>
            <Navbar>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto OPRight">
               <div className='d-flex'>
               <Nav.Link as={Link} to="/home" className='menuContent '><b>Home</b></Nav.Link >
               <Nav.Link as={Link} to="/services" className='menuContent active'><b>Services</b></Nav.Link>
               </div>
               <Nav.Link as={Link} to="/login" className='menuContent'><b>Login</b></Nav.Link>

              </Nav>
              </Navbar.Collapse>
             </Navbar>
            </div>


            <div>

            <div className='box3 pt-5 pb-5'>
                <img src={Img1}></img>

                </div>
            

            <Courses/>
            </div>
            </Container>
            
        </div>
    );
};

export default Services;