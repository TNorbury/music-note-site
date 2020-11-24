import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Col, Container, Row } from "reactstrap"
import styled from "styled-components"
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

const ImageWrapper = styled.div`
  -webkit-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 10px 25px -4px rgba(0, 0, 0, 0.43);
`

interface FeaturesPageProps extends PageProps {
  data: FeaturesPageQuery
}

export default class FeaturesPage extends React.Component<FeaturesPageProps> {
  public render() {
    const features = this.props.data.features.edges
    const images = this.props.data.images

    return (
      <Header title="Features" path={this.props.path}>
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
            {features.map(({ node: feature }, index) => {
              /// Get the image for this specific feature.
              const image = images.edges.filter(
                node => node.node.name === feature.frontmatter.feature
              )[0]
              return (
                <Feature>
                  <Row id={feature.frontmatter.feature}>
                    <Col sm={{ size: 12 }} md={{ size: 4, offset: 2 }}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: feature.html,
                        }}
                      />
                    </Col>
                    {
                      // Make sure we have an image before trying to display it
                      image && (
                        <Col sm={{ size: 12 }} md={{ size: 4 }}>
                          <ImageWrapper>
                            <Img fluid={image.node.childImageSharp.fluid}></Img>
                          </ImageWrapper>
                        </Col>
                      )
                    }
                  </Row>
                </Feature>
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
    features: allMarkdownRemark(
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
    images: allFile(
      filter: { relativePath: {}, sourceInstanceName: { eq: "images" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 700, pngQuality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
