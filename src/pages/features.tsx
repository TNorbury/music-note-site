import { graphql, PageProps } from "gatsby"
import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

import { Row, Col, Container } from "reactstrap"

import { FeaturesPageQuery } from "../../graphql-types"
import Header from "../components/header"

const FeatureHeader = styled.h1`
  text-align: center;
`

const FeaturesList = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: "- ";
    width: 100%;
    justify-content: center;
  }
  a {
    color: white;
  }

  li {
    align-self: flex-end;
    margin-right: 1rem;
    line-height: 100%;
    text-align: center;

    h5 {
      font-size: 1.1rem;
    }

    // @media (max-width: 960px) {
    //   font-size: 11pt;
    // }
  }

  border-bottom-width: 2px;
  border-bottom-color: black;
  border-bottom-style: solid;
  margin-bottom: 2rem;
`

const FeatureDescriptions = styled.div`
  p {
    font-size: 1.1rem;
  }
`

const Feature = styled.div`
  margin-bottom: 2rem;
`

interface FeaturesPageProps extends PageProps {
  data: FeaturesPageQuery
}

export default class FeaturesPage extends React.Component<FeaturesPageProps> {
  public render() {
    const features = this.props.data.allMarkdownRemark.edges

    return (
      <Header title="Features">
        <FeatureHeader>Features</FeatureHeader>
        <FeaturesList>
          <Container fluid={true}>
            <Row>
              <Col md={{ size: 10, offset: 1 }}>
                <ul>
                  {features.map(({ node: feature }) => {
                    return (
                      <AnchorLink href={"#" + feature.frontmatter.feature}>
                        <li>
                          <h5>{feature.frontmatter.label}</h5>
                        </li>
                      </AnchorLink>
                    )
                  })}
                </ul>
              </Col>
            </Row>
          </Container>
        </FeaturesList>
        <FeatureDescriptions>
          <Container fluid={true}>
            {features.map(({ node: feature }) => {
              return (
                <Row id={feature.frontmatter.feature}>
                  <Col sm={{ size: 12 }} md={{ size: 4, offset: 2 }}>
                    <Feature
                      dangerouslySetInnerHTML={{
                        __html: feature.html,
                      }}
                    ></Feature>
                  </Col>
                  <Col sm={{ size: 12 }} md={{ size: 4 }}>
                    An image or something
                  </Col>
                </Row>
              )
            })}
          </Container>
        </FeatureDescriptions>
      </Header>
    )
  }
}

export const pageQuery = graphql`
  query FeaturesPage {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/features/.*\\\\.md$/" } }
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      edges {
        node {
          html
          frontmatter {
            feature
            label
          }
        }
      }
    }
  }
`
