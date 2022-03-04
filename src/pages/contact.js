import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card"
import Stack from "react-bootstrap/Stack"
import Layout from "../components/Layout";
import {Button} from "react-bootstrap";

const contact = () => {
    return(
        <Wrapper>
        <Layout>
            <main className="page">
                <section className="contact-page">

                    <article>
                        <h1>Let's do something together!</h1>
                        <p>
                        Poke raclette lyft occupy +1 wayfarers twee pok pok hashtag normcore. Scenester narwhal swag edison bulb. Sriracha disrupt migas vice. Dreamcatcher pour-over disrupt yuccie twee iceland kickstarter umami chicharrones portland schlitz trust fund vinyl drinking vinegar.
                        </p>
                    </article>
                    
                    <article>
                      <Stack direction="horizontal" gap={4}>
                      <div class="text">
				                <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
				              </div>
                      <div class="text">
				                <p><span>Phone:</span> +62 8232-4242-2345</p>
				              </div>
                      <div class="text">
				                <p><span>Email:</span> mrstudios@gmail.com</p>
				              </div>
                      <div class="text">
				                <p><span>Website:</span> mrstudios.com</p>
				              </div>
                      </Stack>
                    </article>

                    <Card>
                      <Card.Body>
                        <article className="col-md-12">
                            <h3>Get in touch with us</h3>
                            <form className="form-contact-form">
                                <div className="form-row">
                                    <label htmlFor="name">your name</label>
                                    <input type="text" name="name" id="name"></input>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="email">your email</label>
                                    <input type="text" name="email" id="email"></input>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="message">message</label>
                                    <textarea name="message" id="message"></textarea>
                                </div>
                                <button type="submit" className="btn-grad">Submit</button>
                            </form>
                        </article>
                      </Card.Body>
                    </Card>
                </section>

                <section>
                    <div className="contact">
                        
                    </div>
                </section>
            </main>
        </Layout>
        </Wrapper>
    )
}

const Wrapper = styled.article`

.text{
  color: hsla(0, 0%, 0%, 0.8);
  font-family: georgia, serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
}


.contact-page {
    display: grid;
    gap: 2rem 3rem;
    padding-bottom: 3rem;
  }

.form {
    width: 100%;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
  }
  label {
    display: block;
    font-size: var(--smallText);
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  
  input,
  textarea {
    width: 100%;
    border-radius: var(--borderRadius);
  }
  
  .form-row {
    margin-bottom: 1rem;
  }



.btn-grad {background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)}
.btn-grad {
   margin: 10px;
   padding: 15px 45px;
   text-align: center;
   text-transform: uppercase;
   transition: 0.5s;
   background-size: 200% auto;
   color: white;            
   box-shadow: 0 0 20px #eee;
   border-radius: 10px;
   display: block;
 }

 .btn-grad:hover {
   background-position: right center; /* change the direction of the change here */
   color: #fff;
   text-decoration: none;
 }

`

export default contact