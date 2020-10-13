import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { GlobalStyle } from "../style/global_style"
import MyHelmet from "../components/helmet"

const PrivacyPolicy = styled.div`
  color: white;
  padding: 2rem;
`

export default function Privacy({ data }) {
  const { markdownRemark } = data
  const { html } = markdownRemark

  return (
    <React.Fragment>
      <MyHelmet title="Music Note | Privacy Policy" />
      <GlobalStyle />
      <PrivacyPolicy dangerouslySetInnerHTML={{ __html: html }}></PrivacyPolicy>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "privacy" } }) {
      html
    }
  }
`
