import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
  return (
   <>
   
   <Navbar expand="lg" bg="dark" variant='dark' collapseOnSelect>
      
        <Container>
        <Navbar.Brand href="#home">Online Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#card">
            <i className="fa-solid fa-cart-shopping"></i>
                &nbsp; cart</Nav.Link>
            <Nav.Link href="#signin">
            <i className="fa-solid fa-user"></i>
                &nbsp; singin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
        </Container>
    </Navbar>
   
   </>
  )
}

export default Header