import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import {Container, Card} from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { SiNike, SiAdidas, SiNewbalance, SiJordan } from "react-icons/si"
import { IconContext } from "react-icons"
import SEO from "../components/SEO"

const about = () => {
  return (
    <Wrapper>
      <Layout>
      <SEO title="About Us" />
        <StaticImage
          src="../assets/images/shoegallery.jpg"
          width="6048"
          height="4024"
          layout="constrained"
          placeholder="tracedSVG"
          className="imgShoe"
          imgStyle={{
            objectFit: "cover",
          }}
        />
        <Container>
          {/* Title */}
          <main className="page">
            {/* First Content */}
            {/* <Card> */}
            <section className="text-center fw-bold pt-5">
              <h1>"The right shoes can make everything different."</h1>
              <h3>-Jimmy Choo-</h3>
            </section>
            {/* </Card> */}

            {/* Second Content */}
            <div className="grid pt-5">
              <section className="container position-relative">
                <div className="row">
                  <div className="">
                    <article>
                      <h1>Little bit about us!</h1>
                    </article>
                    <div className="line card" />
                  </div>

                  <Card className="overflow-auto bg-dark text-white rounded fs-5 cardContent">
                    <div>
                      <p>
                        Here at M.R Studios, we realize that style and
                        prosperity begin with the correct shoes. We likewise
                        understand that effectively finding the size and style
                        to meet your requirements is vital to your web-based
                        shopping knowledge. Since beginning our web-based
                        business website in 2009, we’ve been endeavoring to
                        present to you that perfect shopping experience.
                      </p>

                      <p>
                        We pride ourselves on conveying hard-to-discover styles,
                        sizes and widths since we realize that each individual’s
                        needs contrast. Regardless of whether you’re
                        experiencing issues looking over our vast determination
                        of different shoes or you have a straightforward
                        inquiry, our client benefit group is prepared and
                        willing to help.
                      </p>

                      <p>
                        Some time before our online business, our family shoe
                        stores, fatherly shoe store Footwear in Indianapolis,
                        IN, opened its entryways in 1886. Today we are glad to
                        state that we have the longest constantly running shoe
                        store in the United States. The life span of our
                        physical business is a demonstration of our duty to you
                        and the majority of our clients. We realize that on the
                        off chance that you are not content with our items and
                        administrations, we are not carrying out our
                        responsibility.
                      </p>

                      <p>
                        This is the reason we take a stab at 100% consumer
                        loyalty, offer a 105% value coordinate guarantee and
                        additionally free delivery and returns.
                      </p>

                      <p>
                        Next time you require another match of kicks for this
                        experience we call life, our group is here to ensure
                        that you get the execution that you require from your
                        apparatus. Regardless of whether you are difficult to
                        fit or have explicit requirements, let M.R Studios
                        enable you to make progress toward your objective.
                      </p>
                    </div>
                  </Card>
                </div>
              </section>
            </div>

            <section className="pt-5 grid">
              <div>
                <h1>Our Goals</h1>
                <div className="line"></div>
              </div>

              <div className="pt-5 text-center">
                <div className="row">
                  <div className="col-sm">
                    <h2>Consistent Product Quality</h2>
                    <p>
                      Consistency is important to the overall success of every
                      business. Providing consistent, high quality products
                      allows your customers to know exactly what to expect every
                      time they purchase your products.
                    </p>
                  </div>

                  <div className="col-sm">
                    <h2>Competitive Production Rates</h2>
                    <p>
                      Competitive pricing is the process of selecting strategic
                      price points to best take advantage of a product or
                      service based market relative to competition.
                    </p>
                  </div>

                  <div className="col-sm">
                    <h2>Low Costs</h2>
                    <p>
                      A pricing strategy in which a company offers a relatively
                      low price to stimulate demand and gain market share.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm">
                    <h2>Reliable Distribution</h2>
                    <p>
                      A good company needs a reliable source of distribution, so
                      that the product they sell can reach the customers in
                      efficient time.
                    </p>
                  </div>

                  <div className="col-sm">
                    <h2>Customer Satisfaction</h2>
                    <p>
                      Customer satisfaction is defined as a measurement that
                      determines how happy customers are with a company's
                      products, services, and capabilities.
                    </p>
                  </div>

                  <div className="col-sm">
                    <h2>To Provide Comfort</h2>
                    <p>
                      We strive not only to be the greatest shoe company, but
                      also to provide comfort to our customers when they buy
                      from our company.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Third Content */}
            <section className="pt-4">
              <IconContext.Provider value={{ size: "50px" }}>
                <h1>Our Partners</h1>
                <div className="line" />
                <div className="d-flex text-center fs-1 d-flex justify-content-between pt-5">
                  <div>
                    <div className="fs-4 d-flex justify-content-between flex-fill ps-4">
                      Jordan
                    </div>
                    <SiJordan></SiJordan>
                  </div>
                  <div>
                    <div className="fs-4 d-flex justify-content-between flex-fill">
                      Adidas
                    </div>
                    <SiAdidas></SiAdidas>
                  </div>
                  <div>
                    <div className="fs-4 d-flex justify-content-between flex-fill">
                      Nike
                    </div>
                    <SiNike></SiNike>
                  </div>
                  <div>
                    <div className="fs-4 d-flex justify-content-between flex-fill pr-4">
                      New Balance
                    </div>
                    <SiNewbalance></SiNewbalance>
                  </div>
                </div>
              </IconContext.Provider>
            </section>
          </main>
        </Container>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: #1c1c1c;
  color: #f0f0f0;
  width: 100%;

  .imgShoe {
    height: 680px;
    width: 100%;
  }

  .grid {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding-top: 25px;
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  h2 {
    font-weight: 600;
  }

  .line {
    border-bottom: 2px solid gray;
    width: 10%;
  }

  a:hover {
    background-position: left;
    text-decoration: none;
    color: white;
  }

  @media (min-width: 800px) {
    .line {
      width: 10%;
    }

    .content {
      display: flex;
    }

    .cardContent {
      height: 50%;
    }

    .left {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
    }

    .img {
      width: 100%;
    }
  }

  h1 {
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: 3px;
    color: white;
    margin-bottom: 2rem;
  }
`

export default about
