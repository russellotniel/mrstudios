import React from "react"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import Col from "react-bootstrap/Col"
import { SiNike, SiAdidas, SiJordan, SiNewbalance } from "react-icons/si"

const About = () => {
  return (
    <Wrapper>
      <Container className="mt-4">
        <h2>Featured Brands</h2>
        <div className="line"></div>
        <p className="text mt-3">
          Our partners are sneaker brands that massively influences the sneaker
          culture all around the world like Nike, Adidas, Jordan Brand, New
          Balance and many more.
        </p>

        <Row className="icon">
          <Col sm md={6} className="column-border">
            <SiNike />
          </Col>
          <Col sm md={6} className="column-border">
            <SiNewbalance />
          </Col>
          <Col sm md={6} className="column-border">
            <SiAdidas />
          </Col>
          <Col sm md={6} className="column-border">
            <SiJordan />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h2 {
    font-weight: 600;
  }

  .line {
    border-bottom: 2px solid gray;
    width: 10%;
  }

  .icon {
    font-size: 5rem;
    text-align: center;
  }

  .column-border {
    border: 1px solid gray;
    align-items: center;
  }

  @media (min-width: 800px) {
    .line {
      width: 5%;
    }

    .icon {
      font-size: 8rem;
    }

    .text {
      width: 50%;
    }
  }
`

export default About
