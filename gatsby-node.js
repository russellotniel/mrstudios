// const { createFilePath } = require(`gatsby-source-filesystem`)

// const { documentToHtmlString } = require("@contentful/rich-text-html-renderer")

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `ContentfulNews`) {
//     const slug = createFilePath({ node, getNode, basePath: "posts" })
//     console.log("slug: " + slug)
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

// exports.createResolvers = ({ createResolvers }) => {
//   createResolvers({
//     contentfulNewsBody: {
//       rssHtml: {
//         type: "String",
//         resolve: source => documentToHtmlString(source),
//       },
//     },
//   })
// }

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  const result = await graphql(
    `
      {
        allContentfulNews {
          nodes {
            title
            blogThumbnail {
              gatsbyImageData
            }
            body {
              raw
            }
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulNews.nodes

  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: "blog/" + post.slug,
        component: blogPost,
        context: {
          title: post.title,
        },
      })
    })
  }
}