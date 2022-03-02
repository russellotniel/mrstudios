import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
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
