declare module "react-anchor-link-smooth-scroll" {
  import React from "react"
  export interface Props {
    href: string
    offset?: () => number | number
    onClick?: (e: Event) => void
    [key: string]: any
  }

  export default class AnchorLink extends React.Component<Props> {}
}
