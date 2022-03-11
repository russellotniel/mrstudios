import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"

const Location = () => {
  return (
    <Wrapper className="mt-4 pb-5">
      <Container>
        <h2 className="pt-3">Our Stores</h2>
        <div className="line"></div>
        <p className="text mt-3">
          We have physical stores that people can visit in Jakarta, Surabaya,
          and Denpasar at the moment. While we are working to open up more
          stores in other cities, we ship our products from Sabang to Merauke
          via inquiries.
        </p>

        <div className="grid">
          <div className="location mt-3">
            <StaticImage
              src="../assets/images/jakarta.jpg"
              placeholder="tracedSVG"
              className="img"
              alt="Jakarta"
            />

            <div className="city mt-3">
              <h2>
                <span>Jakarta</span>
              </h2>
            </div>
          </div>

          <div className="location mt-3">
            <StaticImage
              src="../assets/images/surabaya.jpg"
              placeholder="tracedSVG"
              className="img"
              alt="Surabaya"
            />

            <div className="city mt-3">
              <h2>
                <span>Surabaya</span>
              </h2>
            </div>
          </div>

          <div className="location mt-3">
            <StaticImage
              src="../assets/images/denpasar.jpg"
              placeholder="tracedSVG"
              className="img"
              alt="Denpasar"
            />

            <div className="city mt-3">
              <h2>
                <span>Denpasar</span>
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: #1c1c1c;
  color: #f0f0f0;
  width: 100%;

  h2 {
    font-weight: 600;
  }

  .line {
    border-bottom: 2px solid white;
    width: 10%;
  }

  .grid {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }

  .location .img {
    width: 100%;
    height: 65vh;
  }

  .city span {
    background-color: #f0f0f0;
    color: #1c1c1c;
    padding: 0.125rem;
  }

  .grid .location:nth-child(2) .city h2 {
    text-align: right;
  }

  @media (min-width: 800px) {
    .line {
      width: 5%;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      gap: 2rem;
    }

    .grid .location:nth-child(2) .city h2 {
      text-align: left;
    }

    .text {
      width: 50%;
    }
  }
`

export default Location
