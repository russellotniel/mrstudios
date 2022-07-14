import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className="customnavbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="link">
            M.R Studios
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Products
          </Link>
          <Link
            to="/newsletter"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Newsletter
          </Link>
          <Link
            to="/blog"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
