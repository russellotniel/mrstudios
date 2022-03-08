import React, { useState } from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import slugify from "slugify"
import Brands from "./Brands"
import styled from "styled-components"
import Algolia from "../components/Algolia"

const Sneakers = ({ sneakers }) => {
  const [allSneakers, setAllSneakers] = useState(sneakers)

  const setBackToAll = () => {
    setAllSneakers(sneakers)
  }

  return (
    <Wrapper>
      <div>
        <Brands
          allSneakers={sneakers}
          setAllSneakers={setAllSneakers}
          setBackToAll={setBackToAll}
        />
      </div>
      <Algolia />
      <div className="sneakers">
        {allSneakers.map(sneaker => {
          const { id, name, image, brand, price } = sneaker
          const pathToImage = getImage(image)
          const slug = slugify(name, {
            lower: true,
            remove: /[.']/g,
          })
          slugify.extend({ "%": "-" })
          return (
            <Link key={id} to={`/${slug}`} className="item">
              <GatsbyImage image={pathToImage} alt={name} className="img" />
              <div className="desc">
                <h4>{name}</h4>
                <h5>Rp. {price}.000</h5>
              </div>
            </Link>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: black;
    opacity: 0.6;
  }

  .sneakers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5em;
    margin-top: 2rem;
  }

  .img {
    margin-bottom: 0.8rem;
    height: 25vh;
  }

  .desc h4 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .desc h5 {
    font-size: 1rem;
    font-weight: 400;
  }

  @media screen and (min-width: 800px) {
    .img {
      height: 35vh;
    }
  }

  @media screen and (min-width: 1200px) {
    .sneakers {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5em;
    }

    .img {
      height: 432px;
    }
  }
`

export default Sneakers
