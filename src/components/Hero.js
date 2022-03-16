import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import heroImage from "../assets/images/main-hero.jpg"

const Hero = () => {
  return (
    <Wrapper>
      {/* <div className="hero">
        <StaticImage
          src="../assets/images/main-hero.jpg"
          layout="constrained"
          placeholder="tracedSVG"
          // className="img"
          alt="hero"
          imgStyle={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="info">
        <article>
          <h1>Level up your sneaker game with us</h1>
          <Link to="/products">Shop now</Link>
          </article>
        </div> */}

      <div className="hero">
        <h1>Level up your sneaker game with us</h1>
        <Link to="/products">Shop now</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${heroImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    object-fit: contain;
    color: white;
  }

  /* .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  } */

  /* height: 100%;

  .img {
    position: relative;
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
      max-height: 94vh;
    }
  } */
`

export default Hero
