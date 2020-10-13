import React from "react"
import { Helmet } from "react-helmet"

const MyHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://unpkg.com/purecss@2.0.3/build/base-min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/purecss@2.0.3/build/grids-min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/purecss@2.0.3/build/grids-responsive-min.css"
      />
    </Helmet>
  )
}

export default MyHelmet
