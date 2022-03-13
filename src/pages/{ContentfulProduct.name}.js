import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"
const SneakerTemplate = ({ data }) => {
  const { name, image, price, description } = data.contentfulProduct
  const pathToImage = getImage(image)

  return (
    <Layout>
      <SEO title={name} description={description.description} />
      <Wrapper>
        <div className="shoe-desc">
          <h1>{name}</h1>
          <h2>Rp. {price}.000</h2>
        </div>
        <div className="img">
          <GatsbyImage image={pathToImage} alt={name} className="image" />
        </div>
        <div className="shoe-desc2">
          <Link to="/contact">
            <button>Contact us for inquiries</button>
          </Link>
          <p className="heading-description">Description</p>
          <p>{description.description}</p>
        </div>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query getSingleSneaker($name: String) {
    contentfulProduct(name: { eq: $name }) {
      name
      price
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      description {
        description
      }
    }
  }
`

const Wrapper = styled.div`
  width: 100%;
  h1 {
    margin: 3rem 3rem 1rem 2rem;
  }

  h2 {
    margin: 0 3rem 0.5rem 2rem;
  }

  p {
    margin: 1rem 3rem 0.5rem 2rem;
    color: #2b2b2b;
  }

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
  }

  button {
    padding: 1rem;
    background-color: white;
    color: black;
    width: 90%;
    border: 1px solid;
  }

  button:hover {
    opacity: 0.6;
  }

  .heading-description {
    font-weight: 600;
  }

  .img {
    margin: auto;
    text-align: center;
    width: 90%;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem;

    .shoe-desc {
      grid-column: 2;
      grid-row: 1;
    }

    .shoe-desc2 {
      display: flex;
      flex-direction: column;
      margin-top: 20vh;
      grid-column: 2;
      grid-row: 1;
    }

    .img {
      grid-area: 1 / 1 / span 1 / span 1;
    }

    .image {
      width: 40vw;
      height: 80vh;
    }

    a {
      margin-left: 2rem;
      margin-right: 1rem;
    }

    button {
      width: 100%;
    }
  }
`

export default SneakerTemplate
