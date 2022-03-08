import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Stack from "react-bootstrap/Stack"
import Layout from "../components/Layout"
import { Button } from "react-bootstrap"
import { FaAddressBook, FaPhone, FaGlobe } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IconContext } from "react-icons"

const contact = () => {
  return (
    <Wrapper>
      <Layout>
        <Container className="mt-4 mb-4">
          <main className="page">
            <section className="contact-page">
              {/* First Content */}
              <div className="mb-4">
                <article>
                  <h1 className="fs-1 fw-bold">Interested in our products?</h1>
                  <div className="line"></div>
                </article>
              </div>
              <div className="fs-3">
                <p>
                  Contact us through our information below, or fill out the
                  contact form below!
                </p>
              </div>
            </section>

            {/* Second Content  */}
            <section>
              <article className="d-flex justify-content-center pb-4 pt-5 min-height">
                <IconContext.Provider value={{ size: "50px" }}>
                  <div className="">
                    <Stack direction="horizontal" gap={4}>
                      <div className="text-center w-25">
                        <p>
                          <span>Address:</span> 198 West 21th Street, Suite 721
                          New York NY 10016
                        </p>
                        <FaAddressBook></FaAddressBook>
                      </div>
                      <div className="text-center">
                        <p>
                          <span>Phone:</span> +62 8232-4242-2345
                        </p>
                        <FaPhone></FaPhone>
                      </div>
                      <div className="text-center">
                        <p>
                          <span>Email:</span> mrstudios@gmail.com
                        </p>
                        <MdEmail></MdEmail>
                      </div>
                      <div className="text-center">
                        <p>
                          <span>Website:</span> mrstudios.com
                        </p>
                        <FaGlobe></FaGlobe>
                      </div>
                    </Stack>
                  </div>
                </IconContext.Provider>
              </article>
            </section>
            {/* Third Content  */}
            <section>
              <Card className="bg-dark text-white d-flex justify-content-center rounded pt-4">
                <Card.Body>
                  <form
                    className="row g-3"
                    action="https://formspree.io/f/myyojbba"
                    method="POST"
                  >
                    <div className="col-md-12">
                      <label for="inputFullName" className="form-label">
                        Fullname
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fullname"
                        id="inputFullName"
                        name="FullName"
                      />
                    </div>

                    <div className="col-md-6">
                      <label for="inputEmail" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="inputEmail"
                        name="Email"
                      />
                    </div>

                    <div className="col-6">
                      <label for="inputPhoneNum" className="form-label">
                        Phone number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPhoneNum"
                        placeholder="Phone number"
                        name="PhoneNum"
                      />
                    </div>

                    <div className="col-md-12">
                      <label for="inputMessage" className="form-label">
                        Give us your message
                      </label>
                      <textarea
                        className="form-control"
                        aria-label="Message"
                        placeholder="Message"
                        name="Message"
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                          required
                        />
                        <label className="form-check-label" for="gridCheck">
                          I give consent to M.R Studios to use my information to
                          contact me.
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-dark">
                        Submit
                      </button>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </section>

            <section>
              <div className="content pt-5">
                <div className="left">
                  <h2>Want to know more about us?</h2>
                  <div className="line"></div>

                  <p className="mt-3">
                    Click the button down below to find out more!
                  </p>

                  <div className="mt-4">
                    <Link to="/about">About Us</Link>
                  </div>
                </div>
              </div>
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

  .btn {
    background-color: #1c1c1c;
    color: #f0f0f0;
  }

  h2 {
    font-weight: 600;
  }

  .line {
    border-bottom: 2px solid gray;
    width: 10%;
  }

  .img {
    margin-top: 3rem;
  }
  /* 
  a {
    background: gray;
    border: 2px solid white;
    padding: 1rem;
    text-transform: capitalize;
    text-decoration: none;
    letter-spacing: 5px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    background: linear-gradient(to left, gray 50%, #1c1c1c 50%) right;
    background-size: 200%;
    transition: 0.3s ease-out;
  } */

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
`

export default contact
