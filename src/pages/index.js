import React, { lazy, Suspense } from "react"
import loadable from "@loadable/component"
const About = lazy(() => import("../components/About"))
const Hero = lazy(() => import("../components/Hero"))
const Layout = lazy(() => import("../components/Layout"))
const Location = lazy(() => import("../components/Location"))
const Contact = lazy(() => import("../components/Contact"))
const SEO = lazy(() => import("../components/SEO"))
const Survey = loadable(() => import("../components/Survey"))

const renderLoader = () => <p></p>

const HomePage = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <About />
        <Location />
        <Survey />
        <Contact />
      </Layout>
    </Suspense>
  )
}

export default HomePage
