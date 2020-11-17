import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { GlobalStyle } from "../style/global_style"
import MyHelmet from "../components/helmet"
import Header from "../components/header"

import { PrivacyPageQuery } from "../../graphql-types"

interface PrivacyPageProps {
  data: PrivacyPageQuery
  location: Location
}

const PrivacyPolicy = styled.div`
  color: white;
  padding: 2rem;

  @media (max-width: 960px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
export default class Privacy extends React.Component<PrivacyPageProps> {
  public render() {
    return (
      <React.Fragment>
        <MyHelmet title="Music Note | Privacy Policy" />
        <GlobalStyle />
        <Header />

        <PrivacyPolicy
          dangerouslySetInnerHTML={{
            __html: this.props.data.markdownRemark.html,
          }}
        ></PrivacyPolicy>
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query PrivacyPage {
    markdownRemark(frontmatter: { title: { eq: "privacy" } }) {
      html
    }
  }
`
