import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Card from "react-bootstrap/Card"
import {Link} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";
import {SiPuma, SiNike, SiAdidas, SiBata} from "react-icons/si"


const about = () => {
    return(
        <Layout>
        {/* Title */}
        <div className="text-center">
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>This is the about page.</h2>
                        <p>Welcome to the about page.</p>
                    </article>
                    
                </section>
                {/* First Content */}
                <Card>
                <section className="fs-1 text-center fw-bold">
                    <p>We are a shoe company. With the help of the designers and inputs of the customers.
                       We will strive to make our company the one and greatest in the business.</p>
                </section>
                </Card>


                {/* Second Content */}
                <section className="container fs-4 text-center position-relative pt-4">
                <div className="row">
                <div className="col-sm position-relative d-flex flex-column justify-content-center align-items-center">
                    <article>
                        <h2>Vision</h2>
                        <p>To Strive! Conquer!</p>
                    </article>
                </div>
                {/* <div className="col-sm position-relative">
                    <StaticImage 
                        src="../images/virtual.jpg" 
                        width={750}
                        alt="bg"/>
                </div> */}
                <div className="col-sm position-relative d-flex flex-column justify-content-center align-items-center">
                    <article className="">
                        <h2>Mission</h2>
                        <p>Conquer the world!</p>
                    </article>
                </div>
                </div>

                </section>

                {/* Third Content */}
                <section className="pt-4">
                    <h1>Our Partners</h1>
                    <div className="d-flex text-center fs-1 d-flex justify-content-between">

                        <div>
                            <div className="fs-4 d-flex justify-content-between flex-fill">Puma</div>
                            <SiPuma></SiPuma>
                        </div>
                        <div>
                            <div className="fs-4 d-flex justify-content-between flex-fill">Adidas</div>
                            <SiAdidas></SiAdidas>
                        </div>
                        <div>
                            <div className="fs-4 d-flex justify-content-between flex-fill">Nike</div>
                            <SiNike></SiNike>
                        </div>
                        <div>
                            <div className="fs-4 d-flex justify-content-between flex-fill">Bata</div>
                            <SiBata></SiBata>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        </Layout>
    )
}



export default about