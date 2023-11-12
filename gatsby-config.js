/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Empresa de Games`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `diary`,
        path: `${__dirname}/diary`,
      },
    },
    "gatsby-plugin-mdx"
  ],
}


