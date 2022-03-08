import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <footer className="page-footer mt-5">
        <p>
          &copy; {new Date().getFullYear()} <span>M.R Studios</span>. All rights
          reserved.
        </p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  .page-footer {
    color: white;
    text-align: center;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #212529;
  }
`

export default Footer
