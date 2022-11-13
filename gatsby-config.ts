export default {
  // siteMetadata: {
  //   title: `Gymnastik- und Steptanz-Verein Fortuna Biesdorf e.V.`,
  //   description: `Gymnastik- und Steptanz-Verein Fortuna Biesdorf e.V.`,
  //   author: `@kevinsandow`,
  //   siteUrl: `https://gymstep.de/`,
  // },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-no-javascript`,
  ],
}
