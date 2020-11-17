import React from "react"
import { PageProps } from "gatsby"
import styled from "styled-components"

import { GlobalStyle } from "../style/global_style"
import MyHelmet from "../components/helmet"
import Header from "../components/header"

const SupportBody = styled.div`
  color: white;

  padding: 2rem;

  @media (max-width: 960px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  p {
    font-size 16pt;

  }
`

const MailLink = styled.span`
  color: blue;
  :hover {
    color: #9fc5fd;
  }
`

export default function Support() {
  return (
    <>
      <MyHelmet title="Music Note | Support" />
      <GlobalStyle />
      <Header />
      <SupportBody>
        <p>
          Run into an issue, need help with the app, or just want to reach out?
          Send an email to <MailLink>support@music-note.app</MailLink>
        </p>
      </SupportBody>
    </>
  )
}
