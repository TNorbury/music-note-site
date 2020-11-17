import React from "react"

import { GlobalStyle, PageWrapper } from "../style/global_style"
import MyHelmet from "../components/helmet"
import Header from "../components/header"

const NotFound = () => {
  return (
    <React.Fragment>
      <MyHelmet title="404" />
      <GlobalStyle />
      <Header></Header>
      <PageWrapper>
        <h1>Sorry, but this page couldn't be found!</h1>
      </PageWrapper>
    </React.Fragment>
  )
}

export default NotFound
