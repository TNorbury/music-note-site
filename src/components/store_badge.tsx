import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { ImageSharpFluid } from "../../graphql-types"

const BadgeWrapper = styled.div`
  @media (max-width: 960px) {
    margin: 0.25rem 0;
  }
`

interface StoreBadgeProps {
  alt: string
  href: string
  fluidImg: Pick<
    ImageSharpFluid,
    "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
  >
}

// Badge with a link to Music Note on the proper app store
export default function StoreBadge(props: StoreBadgeProps) {
  return (
    <BadgeWrapper>
      <a href={props.href}>
        <Img alt={props.alt} fluid={props.fluidImg}></Img>
      </a>
    </BadgeWrapper>
  )
}
