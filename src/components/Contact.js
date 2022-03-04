import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <Wrapper>
      <Container className="mt-4 mb-4">
        <div className="content">
          <div className="left">
            <h2>Interested in our products?</h2>
            <div className="line"></div>

            <p className="mt-3">
              Shoot us an email or text us to get the shoes that you want right
              away
            </p>

            <div className="mt-4">
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <StaticImage src="../assets/images/contactshoe.jpg" className="img" />
        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;

  h2 {
    font-weight: 600;
  }

  .line {
    border-bottom: 2px solid gray;
    width: 10%;
  }

  .img {
    margin-top: 3rem;
  }

  a {
    background: gray;
    border: 2px solid white;
    padding: 1rem;
    text-transform: capitalize;
    text-decoration: none;
    letter-spacing: 5px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    background: linear-gradient(to left, gray 50%, #1c1c1c 50%) right;
    background-size: 200%;
    transition: 0.3s ease-out;
  }

  a:hover {
    background-position: left;
    text-decoration: none;
    color: white;
  }

  @media (min-width: 800px) {
    .line {
      width: 10%;
    }

    .content {
      display: flex;
    }

    .left {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
    }

    .img {
      width: 100%;
    }
  }
`

export default Contact
