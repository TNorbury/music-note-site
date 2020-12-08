import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Col, Container, Row } from "reactstrap"
import styled from "styled-components"
import { HomePageQuery } from "../../graphql-types"
import Header from "../components/header"

const MessageWrapperH1 = styled.h1`
  text-align: center;
`
const MessageWrapperH2 = styled.h2`
  text-align: center;
`

const ImageWrapper = styled.div`
  img {
    width: 100%;
    padding-bottom: 2rem;
  }

  padding-left: 33%;
  padding-right: 33%;
  padding-top: 1rem;

  @media (max-width: 960px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

interface HomePageProps extends PageProps {
  data: HomePageQuery
}

export default function Home(props: HomePageProps) {
  const images = props.data.allFile.edges

  const playStoreBadge = images.filter(
    img => img.node.name === "google-play-badge"
  )[0]
  const appStoreBadge = images.filter(
    img => img.node.name === "app_store_preorder_black"
  )[0]

  return (
    <React.Fragment>
      <Header includeDescription={true} path={props.path}>
        <Container fluid={false}>
          <Row>
            <Col md={{ size: 12 }}>
              <ImageWrapper>
                <img
                  src={`music_note_logo.png`}
                  alt="The music note logo. A smiling music note holding a pencil and running"
                ></img>
              </ImageWrapper>
            </Col>
          </Row>
          <Row>
            <Col>
              <MessageWrapperH1>
                Available everywhere December 18th
              </MessageWrapperH1>
              <MessageWrapperH2>Pre-register/pre-order now!</MessageWrapperH2>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 3, offset: 3 }}>
              <a href="https://play.google.com/store/apps/details?id=com.musicnote.album_rater">
                <Img
                  alt="Get it on Google Play"
                  fluid={playStoreBadge.node.childImageSharp.fluid}
                ></Img>
              </a>
            </Col>

            <Col md={{ size: 3 }}>
              <a href="https://apps.apple.com/us/app/music-note-your-music-history/id1537875594">
                <Img
                  alt="Pre-order on the App Store"
                  fluid={appStoreBadge.node.childImageSharp.fluid}
                ></Img>
              </a>
            </Col>
          </Row>
        </Container>
      </Header>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query HomePage {
    allFile(
      filter: { relativePath: {}, sourceInstanceName: { eq: "store badges" } }
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
