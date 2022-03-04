import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

h1, h2, h3, h4 {
  text-transform: capitalize;
  font-weight: 400;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 0.875rem;
}

@media screen and (min-width: 800px){
  
}

.page {
  min-height: calc(100vh - (6rem + 4rem));
}

.page-footer {
  text-align: center;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}
