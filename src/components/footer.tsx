import React from "react"
import { Col, Container, Row } from "reactstrap"
import styled from "styled-components"

const FooterStyle = styled.footer`
  font-size: 11pt;
  text-align: center;

  border-top-width: 0.5px;
  border-top-color: #3b3b3b;
  border-top-style: solid;
  margin-top: 0rem;
  padding: 1rem 4rem;

  background-color: #455a64;
  min-height: 4rem;
  line-height: 4rem;

  @media (max-width: 768px) {
    line-height: 2rem;
  }

  p {
    margin: 0;
  }

  a {
    color: white;
  }
`

export default class Footer extends React.Component {
  render() {
    const xsSize: number = 12
    const mdSize: number = 6
    const lgSize: number = 3
    return (
      <FooterStyle>
        <Container fluid={true}>
          <Row>
            <Col
              xs={{ size: xsSize }}
              md={{ size: mdSize }}
              lg={{ size: lgSize }}
            >
              <p>
                Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
              </p>
            </Col>
            <Col
              xs={{ size: xsSize }}
              md={{ size: mdSize }}
              lg={{ size: lgSize }}
            >
              <p>
                Hosted on <a href="https://www.netlify.com/">Netlify</a>
              </p>
            </Col>
            <Col
              xs={{ size: xsSize }}
              md={{ size: mdSize }}
              lg={{ size: lgSize }}
            >
              <p>
                <a href="/privacy">Privacy</a>
              </p>
            </Col>
            <Col
              xs={{ size: xsSize }}
              md={{ size: mdSize }}
              lg={{ size: lgSize }}
            >
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
