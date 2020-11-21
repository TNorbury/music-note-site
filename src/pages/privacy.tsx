import { graphql } from "gatsby"
import React from "react"
import { PrivacyPageQuery } from "../../graphql-types"
import Header from "../components/header"

interface PrivacyPageProps {
  data: PrivacyPageQuery
  location: Location
}

export default class Privacy extends React.Component<PrivacyPageProps> {
  public render() {
    return (
      <Header title="Privacy Policy">
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.data.markdownRemark.html,
          }}
        ></div>
      </Header>
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
