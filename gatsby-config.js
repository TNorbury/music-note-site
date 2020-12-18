module.exports = {
  siteMetadata: {
    title: `Music Note`,
    description: `Keep track of your music history! Log albums, create lists, import from Spotify and more! Coming soon to Android and iOS`,
    twitterAccount: "@MusicNoteApp",
    url: "https://www.music-note.app",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/assets/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `feature images`,
        path: `${__dirname}/src/assets/images/features`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `store badges`,
        path: `${__dirname}/src/assets/images/store_badges`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mn_graphics`,
        path: `${__dirname}/src/assets/images/mn_graphics`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        codegen: true,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
  ],
}
