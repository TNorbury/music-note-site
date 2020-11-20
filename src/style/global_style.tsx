import "bootstrap/dist/css/bootstrap.min.css"

import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    // Idk if 'font chain' is the correct term, but I guess what I'm trying to 
    // get at is that this is the chain of fonts that fallback will follow.
    --raleway-font-chain: Raleway, Arial, sans-serif;
    --staatliches-font-chain: Staatliches, fantasy;
  }

  body {
    background: #607d8b;
    font-family: var(--raleway-font-chain);
    color: white;
  }

  a {
    color: blue;
  }

  // Big headers get big font
  h1,
  h2,
  h3 {
    font-family: var(--staatliches-font-chain);
    letter-spacing: 1px;
  }

  // Small headers get small font, but bold
  h4,
  h5,
  h6 {
    font-family: var(--raleway-font-chain);
    font-weight: bold;
  }
  `

export const PageWrapper = styled.div`
  padding: 2rem;

  @media (max-width: 960px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
