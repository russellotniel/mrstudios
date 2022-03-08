const contentfulQuery = `
{
    allContentfulProduct(sort: { fields: brand, order: ASC }) {
      nodes {
        id
        name
        price
        brand
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

function pageToAlgoliaRecord({ id, name, price, brand, image }) {
  return {
    objectID: id,
    name,
    price,
    brand,
    image: { ...image.gatsbyImageData },
  }
}

const queries = [
  {
    query: contentfulQuery,
    transformer: ({ data }) =>
      data.allContentfulProduct.nodes.map(pageToAlgoliaRecord),
  },
]

module.exports = queries
