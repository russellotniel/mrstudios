import React from "react"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import CustomNavbar from "./CustomNavbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <CustomNavbar />
      <Container className="page">{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
