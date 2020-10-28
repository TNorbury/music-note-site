import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { GlobalStyle } from "../style/global_style"
import MyHelmet from "../components/helmet"
import Header from "../components/header"
import { Col, Container, Row } from "reactstrap"

const BetaWrapper = styled.div`
  text-align: center;
  color: white;
`

const BetaSignupHeader = styled.h2`
  text-align: center;
`
const BetaSignupLink = styled.h3`
  text-align: center;
`

const SectionHeader = styled.h4`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid black;
`

const SectionBody = styled.div`
  text-align: left;
  margin: 2rem;
  font-size: 1.1rem;
`

const Features = styled.div`
  p {
    margin-bottom: 0rem;
  }
`

const FeedbackSpiel = styled.div`
  P {
    white-space: pre-line;
  }
  img {
    width: 75%;
    border: 1px solid #0f0f0f;

    @media (max-width: 960px) {
      width: 100%;
    }
  }
`

const BetaHeader = () => {
  const BetaHeaderWrapper = styled.div`
    margin-bottom: 1.5rem;
  `
  return (
    <BetaHeaderWrapper>
      <Row>
        <Col>
          <BetaSignupHeader>
            Music Note is about to enter open beta!
          </BetaSignupHeader>
          <BetaSignupLink>
            Click{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScG2Sd1s1NBr1RL7c1oB9ZBOrIWTbVk329TGumNQwRmhaOUyw/viewform?usp=sf_link">
              here
            </a>{" "}
            to sign up and be notified when the beta starts!
          </BetaSignupLink>
        </Col>
      </Row>
    </BetaHeaderWrapper>
  )
}

export default function Beta({ data }) {
  const feedbackHtml = data.feedbackMd.html
  const featuresHtml = data.featuresMd.html

  return (
    <div>
      <MyHelmet title="Music Note | Beta" />
      <GlobalStyle />
      <Header />
      <BetaWrapper>
        <Container fluid={true}>
          <BetaHeader></BetaHeader>

          <Row>
            <Col sm="12" md="12">
              <SectionHeader>Features</SectionHeader>
              <SectionBody>
                <Features dangerouslySetInnerHTML={{ __html: featuresHtml }} />
              </SectionBody>
            </Col>
            {/* Uncomment Nov 1st */}
            {/* <Col sm="12" md="6">
            <SectionHeader>Feedback</SectionHeader>
            <SectionBody>
            <FeedbackSpiel
                dangerouslySetInnerHTML={{ __html: feedbackHtml }}
                />
                </SectionBody>
              </Col> */}
          </Row>
        </Container>
      </BetaWrapper>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    feedbackMd: markdownRemark(
      frontmatter: { title: { eq: "beta/feedback" } }
    ) {
      html
    }
    featuresMd: markdownRemark(
      frontmatter: { title: { eq: "beta/features" } }
    ) {
      html
    }
  }
`
