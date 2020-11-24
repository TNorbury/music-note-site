import { PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import Header from "../components/header"

const SupportMessage = styled.p`
  font-size 16pt;
`
const MailLink = styled.span`
  color: blue;
  :hover {
    color: #9fc5fd;
  }
`

export default function Support(props: PageProps) {
  return (
    <Header title="Support" path={props.path}>
      <SupportMessage>
        Run into an issue, need help with the app, or just want to reach out?
        Send an email to <MailLink>support@music-note.app</MailLink>
      </SupportMessage>
    </Header>
  )
}
