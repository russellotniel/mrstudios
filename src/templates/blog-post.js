import React from "react"
import { Link, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Container } from "react-bootstrap"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

const BlogPostTemplate = ({ data }) => {
  const blog = data.contentfulNews
  console.log(blog)
  const pathToImage = getImage(blog.blogThumbnail.gatsbyImageData)

  // const Bold = ({ children }) => <span className="bold">{children}</span>
  // const Text = ({ children }) => <p className="align-center">{children}</p>

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <span className="font-weight-bold">{text}</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="font-weight-bold">{children}</h2>
      ),
    },
  }

  return (
    <Layout>
      <SEO title={blog.title} />
      <Container className="mt-4 mb-4">
        <Link to="/blog">
          <h4>Back to blog page</h4>
        </Link>
        <GatsbyImage image={pathToImage} alt={blog.title} />
        <h1>{blog.title}</h1>
        <div>{renderRichText(blog.body, options)}</div>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query getSingleNews($title: String) {
    contentfulNews(title: { eq: $title }) {
      title
      blogThumbnail {
        gatsbyImageData(
          height: 500
          width: 1000
          layout: CONSTRAINED
          placeholder: TRACED_SVG
        )
      }
      body {
        raw
      }
      slug
    }
  }
`

export default BlogPostTemplate

// enum MARKS {
//   BOLD = 'bold',
//   ITALIC = 'italic',
//   UNDERLINE = 'underline',
//   CODE = 'code',
// }

// BLOCKS
// PARAGRAPH = 'paragraph',

//   HEADING_1 = 'heading-1',
//   HEADING_2 = 'heading-2',
//   HEADING_3 = 'heading-3',
//   HEADING_4 = 'heading-4',
//   HEADING_5 = 'heading-5',
//   HEADING_6 = 'heading-6',
