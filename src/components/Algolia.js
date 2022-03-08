import React, { useState } from "react"
import styled from "styled-components"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, connectHits } from "react-instantsearch-dom"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { Link } from "gatsby"
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const NewHits = connectHits(({ hits }) => {
  return hits.map(sneaker => {
    const { objectID, image, name, brand, price } = sneaker
    const slug = slugify(name, {
      lower: true,
      remove: /[.']/g,
    })
    slugify.extend({ "%": "-" })

    return (
      <SearchContainer>
        <div className="item">
          <Link key={objectID} to={`/${slug}`}>
            <GatsbyImage image={image} alt={name} className="img" />
            <div className="desc">
              <h4>{name}</h4>
              <h5>{brand}</h5>
              <h5>Rp. {price}.000</h5>
            </div>
          </Link>
        </div>
      </SearchContainer>
    )
  })
})

const Algolia = () => {
  const [search, setSearch] = useState(false)
  const test = event => {
    if (event.target.selectionEnd !== 0) {
      setSearch(true)
    } else {
      setSearch(false)
    }
  }

  return (
    <Wrapper>
      <InstantSearch
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        <SearchBox onChange={test} />
        {search && <NewHits />}
      </InstantSearch>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .ais-SearchBox {
    display: flex;
    justify-content: end;
    margin-bottom: 0.5rem;
  }
`

const SearchContainer = styled.div`
  height: 100%;
  background: whitesmoke;

  a {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: 1px solid black;
  }

  :last-child {
    border-bottom: none;
  }

  .img {
    margin-bottom: 0.8rem;
    height: 20vh;
  }

  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    .img {
      object-fit: contain;
    }
  }
`

export default Algolia
