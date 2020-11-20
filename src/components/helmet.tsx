import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

interface HelmetProps {
  title?: String
}

export default class MyHelmet extends React.Component<HelmetProps> {
  public render() {
    let title: string = "Music Note"

    if (this.props.title) {
      title += ` | ${this.props.title}`
    }

    return (
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          {/* Load the fonts we're using. Raleway is for the body, Staatliches 
              is for big headers */}
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:normal,bold&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Staatliches&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
      </HelmetProvider>
    )
  }
}
