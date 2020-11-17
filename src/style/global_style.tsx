import "bootstrap/dist/css/bootstrap.min.css"

import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background: #607d8b
  }

  a {
    color: blue;
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
