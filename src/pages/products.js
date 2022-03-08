import React from "react"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import Sneakers from "../components/Sneakers"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: sneakers },
  } = data

  return (
    <Layout>
      <SEO title="Our Products" />
      <Container className="mt-3">
        <h1>Our Products</h1>
        <Sneakers sneakers={sneakers}></Sneakers>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct(sort: { fields: brand, order: ASC }) {
      nodes {
        id
        name
        price
        brand
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default products
