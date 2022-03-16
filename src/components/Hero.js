import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/main-hero.jpg"
        layout="constrained"
        placeholder="tracedSVG"
        className="img"
        alt="hero"
        imgStyle={{
          objectFit: "cover",
        }}
      />
      {/* <div className="info">
        <article>
          <h1>Level up your sneaker game with us</h1>
          <Link to="/products">Shop now</Link>
        </article>
      </div> */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;

  .img {
    height: 35vh;
    width: 100vw;
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  article {
    position: absolute;
    text-align: right;

    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      letter-spacing: 3px;
      color: white;
      margin-bottom: 2rem;
    }

    a {
      background: transparent;
      border: 2px solid white;
      padding: 1rem;
      text-transform: capitalize;
      letter-spacing: 5px;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      text-decoration: none;

      background: linear-gradient(to left, transparent 50%, gray 50%) right;
      background-size: 200%;
      transition: 0.3s ease-out;
    }

    a:hover {
      background-position: left;
    }
  }

  @media (min-width: 800px) {
    article {
      margin-top: 0;
    }

    .img {
      height: 94vh;
      width: 100vw;
    }
  }
`

export default Hero
