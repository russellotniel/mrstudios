import React, { useState } from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import slugify from "slugify"
import styled from "styled-components"

const News = ({ news }) => {
  console.log("dari component news")
  console.log(news)
  return (
    <Wrapper>
      <div>
        {/* {news.map((blog, index) => {
          const { title } = blog.node
          const pathToImage = getImage(blog.node.blogThumbnail.gatsbyImageData)
          const content = blog.node.content.content

          return (
            <>
              <Link key={index}>
                <h2 key={index}>{title}</h2>
                <GatsbyImage image={pathToImage} alt={title} className="img"/>
              </Link>
            </>
          )
        })} */}
        {news.map((blog, index) => {
          const title = blog.title
          const slug = blog.slug
          const pathToImage = getImage(blog.blogThumbnail.gatsbyImageData)

          return (
            <>
              <Link key={index} to={slug}>
                <h2>{title}</h2>
                <GatsbyImage image={pathToImage} alt={title} className="img" />
              </Link>
            </>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;

  a {
    cursor: pointer;
  }

  h2 {
    text-decoration: underline;
  }

  .img {
    margin-bottom: 0.8rem;
    height: 25vh;
  }
`

export default News
