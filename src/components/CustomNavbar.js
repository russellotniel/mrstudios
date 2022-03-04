import React, { useState } from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Offcanvas from "react-bootstrap/Offcanvas"
import styled from "styled-components"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"

const CustomNavbar = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Wrapper>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="link">
              <h2>M.R Studios</h2>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <GiHamburgerMenu onClick={handleShow} className="hamburger" />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <h1>Menu</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to="/about">
            <h2>About</h2>
          </Link>

          <Link to="/product">
            <h2>Product</h2>
          </Link>

          <Link to="/contact">
            <h2>Contact</h2>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  margin-bottom: 1rem;

  .link {
    color: whitesmoke;
    text-decoration: none;
  }

  .hamburger {
    font-size: 2rem;
    color: white;
  }

  .hamburger:hover {
    cursor: pointer;
  }
`

export default CustomNavbar
