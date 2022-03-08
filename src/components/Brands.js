import React, { useState } from "react"
import styled from "styled-components"

const Brands = ({ allSneakers, setAllSneakers, setBackToAll }) => {
  const [index, setIndex] = useState(0)
  const brands = [
    "All",
    ...new Set(
      allSneakers.map(sneaker => {
        return sneaker.brand
      })
    ),
  ]

  const filterByBrand = (brand, brandIndex) => {
    setIndex(brandIndex)
    if (brand === "All") {
      setBackToAll()
    } else {
      const tempBrands = allSneakers.filter(sneaker => sneaker.brand === brand)
      setAllSneakers(tempBrands)
    }
  }

  return (
    <Wrapper>
      {brands.map((brand, brandIndex) => {
        return (
          <button
            key={brandIndex}
            className={index === brandIndex ? "active" : undefined}
            onClick={() => filterByBrand(brand, brandIndex)}
          >
            {brand}
          </button>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: black;
    font-size: 1rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: 0.2s ease-in-out;
  }

  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 gray;
  }
`

export default Brands
