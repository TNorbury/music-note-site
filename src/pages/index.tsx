import { graphql, PageProps } from "gatsby"
import React from "react"
import { Col, Row } from "reactstrap"
import styled from "styled-components"
import { HomePageQuery } from "../../graphql-types"
import Header from "../components/header"
import StoreBadge from "../components/store_badge"

const MessageWrapperH1 = styled.h1`
  text-align: center;
  font-size: 72px;
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
  const { playStoreBadge, appStoreBadge } = props.data

  return (
    <React.Fragment>
      <Header includeDescription={true} path={props.path}>
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
              alt="Pre-order on the App Store"
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
  }
`
