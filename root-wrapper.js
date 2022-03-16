import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}

body {
  font-family: 'Inter';
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

.page {
  min-height: calc(100vh - (6rem + 4rem));
}

button,
.btn {
  cursor: pointer;
  appearance: none;
  background: none;
  border: none;
  padding: 0.375rem 0.75rem;
}

button:hover,
.btn:hover {
  opacity: 0.7;
}

.customnavbar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #1C1C1C;
}

.nav-center {
  width: 90%;
}

.nav-header {
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  color: white;
  font-size: 1.5rem;
  font-weight: 500;  
  text-decoration: none;
}

.link:hover {
  color: white;
  opacity: 0.7;
}

.nav-btn {
  padding: 0.15rem 0.75rem;
}

.nav-btn svg {
  font-size: 2rem;
  color: white;
}

.nav-links {
  height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
}

.show-links {
  height: 14.5rem;
}

.nav-link {
  display: block;
  text-align: center;
  font-size: 1.5rem;
  text-transform: capitalize;
  color: white;
  border-top: 1px solid gray;
}

.nav-link:hover,
.nav-links .nav-link:nth-child(1):hover{
  opacity: 0.8;
  color: white;
}

.nav-links .nav-link:nth-child(1) {
  border-top: none;
  color: white;
}

.active-link {
  color: gray;
}

@media screen and (min-width: 1200px) {
  .nav-center {
    width: 70vw;
    display: flex;
  }

  .nav-header {
    width: 60vw;
  }

  .nav-btn {
    display: none;
  }

  .nav-links {
    height: auto !important;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    width: 80vw;
  }

  .nav-link {
    padding: 0 1rem;
    border-top: none;
    margin-right: 1rem;
    font-size: 1rem;
  }
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
