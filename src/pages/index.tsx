import { graphql, PageProps } from "gatsby"
import React from "react"
import { Col, Row } from "reactstrap"
import styled from "styled-components"
import { HomePageQuery } from "../../graphql-types"
import Header from "../components/header"
import StoreBadge from "../components/store_badge"

import Img from "gatsby-image"

const MessageWrapperH1 = styled.h1`
  text-align: center;
  font-size: 72px;
`
const MessageWrapperH2 = styled.h2`
  text-align: center;
`

const ImageWrapper = styled.div`
  Img {
    width: 100%;
  }

  padding-left: 33%;
  padding-right: 33%;
  padding-top: 1rem;
  padding-bottom: 2rem;

  @media (max-width: 960px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

interface HomePageProps extends PageProps {
  data: HomePageQuery
}

export default function Home(props: HomePageProps) {
  const { playStoreBadge, appStoreBadge, musicNoteLogo } = props.data

  return (
    <React.Fragment>
      <Header includeDescription={true} path={props.path}>
        <Row>
          <Col md={{ size: 12 }}>
            <ImageWrapper>
              <Img
                alt="The music note logo. A smiling music note holding a pencil and running"
                fluid={musicNoteLogo.childImageSharp.fluid}
              />
            </ImageWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            <MessageWrapperH1>Available Now!</MessageWrapperH1>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ size: 10, offset: 1 }}
            md={{ size: 4, offset: 2 }}
            lg={{ size: 2, offset: 4 }}
          >
            <StoreBadge
              alt="Download on the App Store"
              fluidImg={appStoreBadge.childImageSharp.fluid}
              href="https://apps.apple.com/us/app/music-note-your-music-history/id1537875594"
            />
          </Col>

          <Col
            xs={{ size: 10, offset: 1 }}
            md={{ size: 4, offset: 0 }}
            lg={{ size: 2, offset: 0 }}
          >
            <StoreBadge
              alt="Get it on Google Play"
              fluidImg={playStoreBadge.childImageSharp.fluid}
              href="https://play.google.com/store/apps/details?id=com.musicnote.album_rater"
            />
          </Col>
        </Row>
      </Header>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query HomePage {
    appStoreBadge: file(
      sourceInstanceName: { eq: "store badges" }
      name: { eq: "app-store-badge" }
    ) {
      childImageSharp {
        fluid(maxWidth: 700, pngQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    playStoreBadge: file(
      sourceInstanceName: { eq: "store badges" }
      name: { eq: "google-play-badge" }
    ) {
      childImageSharp {
        fluid(maxWidth: 700, pngQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    musicNoteLogo: file(
      sourceInstanceName: { eq: "mn_graphics" }
      name: { eq: "music_note_logo" }
    ) {
      childImageSharp {
        fluid(pngQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
