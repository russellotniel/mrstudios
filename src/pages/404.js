import React from "react"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import styled from "styled-components"
import { Link } from "gatsby"
import SEO from "../components/SEO"
const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <Container>
        <Wrapper>
          <h1>Oops..</h1>
          <h1>The page you are looking for is not here :(</h1>
          <p>
            Click <Link to="/">here</Link> to go to the main page.
          </p>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Wrapper = styled.div`
  min-height: 81vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 1rem;
    font-size: 6rem;
    text-align: center;
    text-transform: none;
  }

  p {
    font-size: 2rem;
    text-align: center;
  }
`

export default ErrorPage
