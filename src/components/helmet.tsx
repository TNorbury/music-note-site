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
        </Helmet>
      </HelmetProvider>
    )
  }
}
