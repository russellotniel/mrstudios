import React from "react"
// import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"
import News from "../components/News"

const blog = ({ data }) => {
  const {
    allContentfulNews: { edges: news },
  } = data

  return (
    <Layout>
      <SEO title="Blog" />
      <Container className="mt-4 mb-4">
        <main className="page">
          <h1>Our Blog Feed</h1>
          <News news={news} />
        </main>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulNews {
      edges {
        node {
          title
          content {
            content
          }
          blogThumbnail {
            gatsbyImageData
          }
        }
      }
    }
  }
`

// const Wrapper = styled.section`
//   background-color: #1c1c1c;
//   color: #f0f0f0;
//   width: 100%;

//   .btn {
//     background-color: #1c1c1c;
//     color: #f0f0f0;
//   }

//   h2 {
//     font-weight: 600;
//   }

//   .line {
//     border-bottom: 2px solid gray;
//     width: 10%;
//   }

//   .img {
//     margin-top: 3rem;
//   }

//   a:hover {
//     background-position: left;
//     text-decoration: none;
//     color: white;
//   }

//   @media (min-width: 800px) {
//     .line {
//       width: 10%;
//     }

//     .content {
//       display: flex;
//     }

//     .left {
//       width: 100%;
//       display: flex;
//       flex-direction: column;
//       align-content: center;
//       justify-content: center;
//     }

//     .info {
//       display: flex;
//       flex-direction: column;
//       align-content: center;
//       justify-content: center;
//     }

//     .img {
//       width: 100%;
//     }
//   }
// `

export default blog
