import { PageProps } from "gatsby"
import React from "react"
import Header from "../components/header"

const NotFound = (props: PageProps) => {
  return (
    <Header title="404" path={props.path}>
      <h1>Sorry, but this page couldn't be found!</h1>
    </Header>
  )
}

export default NotFound
