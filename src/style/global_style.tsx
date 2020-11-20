import "bootstrap/dist/css/bootstrap.min.css"

import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background: #607d8b;
    font-family: Raleway;
  }

  a {
    color: blue;
  }

  // Big headers get big font
  h1,
  h2,
  h3 {
    font-family: Staatliches;
    letter-spacing: 1px;
  }

  // Small headers get small font, but bold
  h4,
  h5,
  h6 {
    font-family: Raleway;
    font-weight: bold;
  }
  `

export const PageWrapper = styled.div`
  color: white;
  padding: 2rem;

  @media (max-width: 960px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
