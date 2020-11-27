import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { SiteMetadataQuery } from "../../graphql-types"

export interface MyHelmetProps {
  title?: string
  includeDescription?: boolean
  path: string
}

export default function MyHelmet(props: MyHelmetProps) {
  const siteMetadata = useStaticQuery<SiteMetadataQuery>(
    graphql`
      query siteMetadata {
        site {
          siteMetadata {
            title
            description
            twitterAccount
            url
          }
        }
      }
    `
  ).site.siteMetadata

  const description = props.includeDescription ? siteMetadata.description : ""

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate={siteMetadata.title + " | %s"}
        defaultTitle={siteMetadata.title}
        meta={[
          {
            name: "description",
            content: description,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: siteMetadata.twitterAccount,
          },
          {
            name: `twitter:title`,
            content: siteMetadata.title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
        ]}
      >
        <title>{props.title}</title>
        <link href={siteMetadata.url + props.path} rel="canonical" />

        {/* Load the fonts we're using. Raleway is for the body, Staatliches 
              is for big headers */}
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:normal,bold&display=swap"
          rel="preload"
          as="style"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Staatliches&display=swap"
          rel="preload"
          as="style"
        ></link>
      </Helmet>
    </HelmetProvider>
  )
}
