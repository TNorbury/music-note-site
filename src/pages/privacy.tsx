import React from "react"
import { graphql } from "gatsby"

import { GlobalStyle, PageWrapper } from "../style/global_style"
import MyHelmet from "../components/helmet"
import Header from "../components/header"

import { PrivacyPageQuery } from "../../graphql-types"

interface PrivacyPageProps {
  data: PrivacyPageQuery
  location: Location
}

export default class Privacy extends React.Component<PrivacyPageProps> {
  public render() {
    return (
      <React.Fragment>
        <MyHelmet title="Privacy Policy" />
        <GlobalStyle />
        <Header />

        <PageWrapper
          dangerouslySetInnerHTML={{
            __html: this.props.data.markdownRemark.html,
          }}
        ></PageWrapper>
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
