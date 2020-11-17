import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

interface HelmetProps {
  title: String
}

export default class MyHelmet extends React.Component<HelmetProps> {
  public render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
      </HelmetProvider>
    )
  }
}
