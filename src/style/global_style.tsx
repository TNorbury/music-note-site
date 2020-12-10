import "bootstrap/dist/css/bootstrap.min.css"

import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  // :root {
  //   // Idk if 'font chain' is the correct term, but I guess what I'm trying to 
  //   // get at is that this is the chain of fonts that fallback will follow.
  //   --raleway-font-chain: Raleway, Arial, sans-serif;
  //   --staatliches-font-chain: Staatliches, fantasy;
  // }

  @import url('https://fonts.googleapis.com/css?family=Raleway:normal,bold&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Staatliches&display=swap');

  body {
    background: #607d8b;
    font-family: Raleway, Arial, sans-serif;
    color: white;
  }

  a {
    color: blue;
  }

  // Big headers get big font
  h1,
  h2,
  h3 {
    font-family: Staatliches, fantasy;
    letter-spacing: 1px;
  }

  // Small headers get small font, but bold
  h4,
  h5,
  h6 {
    font-family: Raleway, Arial, sans-serif;
    font-weight: bold;
  }
  `

export const PageWrapper = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 3.5rem;
  padding-bottom: 4rem;

  @media (max-width: 960px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
