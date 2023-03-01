// const { documentToHtmlString } = require("@contentful/rich-text-html-renderer")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `M.R Studios`,
    description: `Providing you with the best sneakers in Indonesia. Made by Mario and Russell`,
    siteUrl: `https://mrstudios.netlify.app/`,
    // siteUrl: `http://localhost:8000/`,
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qa5s4zuftbb3`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries: require("./src/constants/algolia"),
        chunkSize: 10000,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Inter",
              variants: ["300", "400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { allContentfulNews } }) => {
    //           return allContentfulNews.edges.map(edge => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               title: edge.node.title,
    //               content: edge.node.content.content,
    //               thumbnail: edge.node.blogThumbnail.gatsbyImageData,
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allContentfulNews {
    //               edges {
    //                 node {
    //                   title
    //                   content {
    //                     content
    //                   }
    //                   blogThumbnail {
    //                     gatsbyImageData
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: "mr.studios Blog"
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //           }
    //         }
    //       }
    //     `,

    //     setup: ({ query: { site } }, options) => ({
    //       ...options,
    //       title: "MRStudios: RSS Feeds",
    //       description: site.siteMetadata.description,
    //       site_url: site.siteMetadata.siteUrl,
    //       feed_url: `${site.siteMetadata.siteUrl}/rss.xml`,
    //       copyright: `© 2022 - ${new Date().getFullYear()} ${
    //         site.siteMetadata.title
    //       }, All rights reserved.`,
    //       language: "en",
    //       generator: "GatsbyJS",
    //       ttl: "60",
    //       custom_namespaces: {
    //         webfeeds: "http://webfeeds.org/rss/1.0",
    //       },
    //     }),

    //     feeds: [
    //       {
    //         serialize: ({ query: { allContentfulNews } }) =>
    //           allContentfulNews.edges.map(edge => ({
    //             title: edge.node.title,
    //             thumbnail: edge.node.blogThumbnail.gatsbyImageData,
    //             custom_elements: [
    //               {
    //                 // "content:encoded": documentToHtmlString(edge.node.body.raw),
    //                 "content:encoded": JSON.stringify(edge.node.body),
    //               },
    //             ],
    //           })),

    //         query: `
    //           {
    //             allContentfulNews {
    //               edges {
    //                 node {
    //                   title
    //                   blogThumbnail {
    //                     gatsbyImageData
    //                   }
    //                   body {
    //                     raw
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,

    //         output: "/rss.xml",
    //         title: "MRStudios: RSS Feeds",
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata{
              title
              description
              siteUrl
              site_url: siteUrl              
            }
          }
        }`,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulNews } }) => {
              return allContentfulNews.nodes.map(node => {
                return Object.assign(
                  {},
                  {
                    title: node.title,
                    blogThumbnail: node.blogThumbnail.gatsbyImageData,
                    url: `${site.siteMetadata.siteUrl}/blog/${node.slug}`,
                    guid: site.siteMetadata.siteUrl + node.slug,
                    custom_elements: [{ "content:encoded": node.body }],
                    // custom_elements: [{ "content:encoded": JSON.parse(documentToHtmlString(node.body.raw)) }],
                  }
                )
              })
            },
            query: `
              {
                allContentfulNews {
                  nodes {
                    title
                    slug
                    blogThumbnail {
                      gatsbyImageData
                    }
                    body {
                      raw
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "MRStudios RSS Feed",
          },
        ],
      },
    },
  ],
}
