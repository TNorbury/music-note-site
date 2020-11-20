import React from "react"
import { Col, Container, Row } from "reactstrap"
import styled from "styled-components"

const FooterStyle = styled.div`
  font-size: 11pt;
  text-align: center;

  border-top-width: 1px;
  border-top-color: black;
  border-top-style: solid;
  height: 100%;
  margin-top: 0rem;
  padding-top: 1rem;

  @media (min-height: 850px) {
    margin-top: 7rem;
  }
  @media (max-width: 960px) {
    margin-top: 7rem;
    text-align: left;
  }

  a {
    color: white;
  }
`

export default class Footer extends React.Component {
  render() {
    return (
      <FooterStyle>
        <Container fluid={false}>
          <Row>
            <Col md={{ size: 2, offset: 2 }}>
              <p>
                Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
              </p>
            </Col>
            <Col md="2">
              <p>
                Hosted on <a href="https://www.netlify.com/">Netlify</a>
              </p>
            </Col>
            <Col md="2">
              <p>
                <a href="/privacy">Privacy</a>
              </p>
            </Col>
            <Col md="2">
              <p>
                <a href="/eula">EULA</a>
              </p>
            </Col>
          </Row>
        </Container>
      </FooterStyle>
    )
  }
}
