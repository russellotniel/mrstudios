import React, { lazy, Suspense } from "react"
import loadable from "@loadable/component"
import About from "../components/About"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Location from "../components/Location"
import Contact from "../components/Contact"
import SEO from "../components/SEO"
// const About = lazy(() => import("../components/About"))
// const Hero = lazy(() => import("../components/Hero"))
// const Layout = lazy(() => import("../components/Layout"))
// const Location = lazy(() => import("../components/Location"))
// const Contact = lazy(() => import("../components/Contact"))
// const SEO = lazy(() => import("../components/SEO"))
const Survey = loadable(() => import("../components/Survey"))

// const renderLoader = () => <p></p>

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
