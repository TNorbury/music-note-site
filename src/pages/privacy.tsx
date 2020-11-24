import { graphql, PageProps } from "gatsby"
import React from "react"
import { PrivacyPageQuery } from "../../graphql-types"
import Header from "../components/header"

interface PrivacyPageProps extends PageProps {
  data: PrivacyPageQuery
}

export default class Privacy extends React.Component<PrivacyPageProps> {
  public render() {
    return (
      <Header title="Privacy Policy" path={this.props.path}>
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
