import React from "react"

import { GlobalStyle } from "../style/global_style"
import MyHelmet from "../components/helmet"

const NotFound = () => {
  return (
    <React.Fragment>
      <MyHelmet title="Music Note" />
      <GlobalStyle />
      <h1>Sorry, but this page couldn't be found!</h1>
    </React.Fragment>
  )
}

export default NotFound
