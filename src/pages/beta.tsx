import { graphql } from "gatsby"
import React from "react"
import { Col, Container, Row } from "reactstrap"
import styled from "styled-components"
import { BetaPageQuery } from "../../graphql-types"
import Header from "../components/header"

interface BetaPageProps {
  data: BetaPageQuery
  location: Location
}

const BetaWrapper = styled.div`
  text-align: center;
  color: white;
`

const SectionHeader = styled.h4`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid black;
  margin-top: 1rem;
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

const BetaSteps = styled.div`
  text-align: left;
  p {
    margin-bottom: 0.25rem;
  }
  ul {
    margin-bottom: 0.25rem;
  }
`

const BetaHeader = () => {
  const BetaHeaderWrapper = styled.div`
    margin-bottom: 1.5rem;
  `
  const BetaSignupHeader = styled.h2`
    text-align: center;
  `
  const BetaSignupLink = styled.h4`
    text-align: center;
  `
  return (
    <BetaHeaderWrapper>
      <Row>
        <Col>
          <BetaSignupHeader>Music Note is now in open beta!</BetaSignupHeader>
          <BetaSignupLink>
            Click{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScG2Sd1s1NBr1RL7c1oB9ZBOrIWTbVk329TGumNQwRmhaOUyw/viewform?usp=sf_link">
              here
            </a>{" "}
            to sign up !
          </BetaSignupLink>
        </Col>
      </Row>
    </BetaHeaderWrapper>
  )
}

export default class Beta extends React.Component<BetaPageProps> {
  public render() {
    const feedbackHtml = this.props.data.feedbackMd.html
    const featuresHtml = this.props.data.featuresMd.html
    const stepsHtml = this.props.data.stepsMd.html
    return (
      <Header title="Beta">
        <BetaWrapper>
          <Container fluid={true}>
            <BetaHeader></BetaHeader>

            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <BetaSteps
                  dangerouslySetInnerHTML={{ __html: stepsHtml }}
                ></BetaSteps>
              </Col>
            </Row>

            <Row>
              <Col sm="12" md={{ size: 6 }}>
                <SectionHeader>Features</SectionHeader>
                <SectionBody>
                  <Features
                    dangerouslySetInnerHTML={{ __html: featuresHtml }}
                  />
                </SectionBody>
              </Col>
              <Col sm="12" md="6">
                <SectionHeader>Feedback</SectionHeader>
                <SectionBody>
                  <FeedbackSpiel
                    dangerouslySetInnerHTML={{ __html: feedbackHtml }}
                  />
                </SectionBody>
              </Col>
            </Row>
          </Container>
        </BetaWrapper>
      </Header>
    )
  }
}

export const pageQuery = graphql`
  query BetaPage {
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
    stepsMd: markdownRemark(frontmatter: { title: { eq: "beta/steps" } }) {
      html
    }
  }
`
