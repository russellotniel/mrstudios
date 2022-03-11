import React from "react"
import About from "../components/About"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Location from "../components/Location"
import Contact from "../components/Contact"
import SEO from "../components/SEO"
import Survey from "../components/Survey"

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <Location />
      <Survey />
      <Contact />
    </Layout>
  )
}

export default HomePage
