import React from 'react';
import { Navbar, Nav, Container  } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const Header = () => {
  return (
   <>
   
    <Navbar expand="lg" bg="dark" variant='dark' collapseOnSelect>
      <Container>
        <a href='/'>
        <Navbar.Brand >Shopping App</Navbar.Brand>
        </a>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <a href='/card'>
            <Nav.Link>
            <i className="fa-solid fa-cart-shopping"></i>
             &nbsp; card</Nav.Link>
            </a>
            
          <a href='/Sing in'>
          
          <Nav.Link >
            <i className="fa-solid fa-user"></i>
              
            &nbsp;Sing in</Nav.Link>
          </a>

            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


   
   </>
  )
}

export default Header