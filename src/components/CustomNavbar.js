import React, { useState } from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Offcanvas from "react-bootstrap/Offcanvas"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"

const CustomNavbar = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/">M.R Studios</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <GiHamburgerMenu onClick={handleShow} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <h1>Menu</h1>
        </Offcanvas.Header>
        <h2>About</h2>
        <h2>Product</h2>
        <h2>Contact</h2>
      </Offcanvas>
    </>
  )
}

export default CustomNavbar
