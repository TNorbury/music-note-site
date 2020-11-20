import React from "react"
import Header from "../components/header"
import { PageWrapper } from "../style/global_style"


const NotFound = () => {
  return (
    <React.Fragment>
      <Header title="404">
        <PageWrapper>
          <h1>Sorry, but this page couldn't be found!</h1>
        </PageWrapper>
      </Header>
    </React.Fragment>
  )
}

export default NotFound
