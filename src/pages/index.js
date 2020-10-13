import React from "react"
import styled from "styled-components"

import { GlobalStyle } from "../style/global_style"
import MyHelmet from "../components/helmet"

const MessageWrapper = styled.h1`
  text-align: center;
  color: white;
`

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`

export default function Home() {
  return (
    <React.Fragment>
      <MyHelmet title="Music Note" />
      <GlobalStyle />
      <div class="pure-g">
        <div class="pure-u-1-3" />
        <div class="pure-u-1-3">
          <MessageWrapper>Coming soon!</MessageWrapper>
        </div>
        <div class="pure-u-1-3" />
      </div>
      <div class="pure-g">
        <div class="pure-u-1-3" />
        <div class="pure-u-1-3 pure-img">
          <ImageWrapper>
            <img
              src={`music_note_logo.png`}
              alt="The music note logo. A smiling music note holding a pencil and running"
            ></img>
          </ImageWrapper>
        </div>
        <div class="pure-u-1-3" />
      </div>
    </React.Fragment>
  )
}
