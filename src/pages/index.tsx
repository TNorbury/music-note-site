import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"

import { GlobalStyle } from "../style/global_style"
import MyHelmet from "../components/helmet"
import Header from "../components/header"

const MessageWrapper = styled.h1`
  text-align: center;
  color: white;
`

const ImageWrapper = styled.div`
  img {
    width: 100%;
    margin-bottom: 2rem;
  }

  padding-left: 33%;
  padding-right: 33%;

  @media (max-width: 960px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const MoreBetaInfo = styled.h3`
  text-align: center;
  color: white;
`

export default function Home() {
  return (
    <React.Fragment>
      <MyHelmet title="Music Note" />
      <GlobalStyle />
      <Header />
      <Container fluid={true}>
        <Row>
          <Col>
            <MessageWrapper>Open Beta starts November 2nd!</MessageWrapper>
            <MoreBetaInfo>
              <a href="/beta">Click here</a> for more info!
            </MoreBetaInfo>
          </Col>
        </Row>
        <Row>
          <Col md="{{ size: 6, offset: 3 }}">
            <ImageWrapper>
              <img
                src={`music_note_logo.png`}
                alt="The music note logo. A smiling music note holding a pencil and running"
              ></img>
            </ImageWrapper>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}
