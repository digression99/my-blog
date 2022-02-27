module.exports = {
  siteMetadata: {
    title: `My Blog`,
    siteUrl: `https://vibrant-johnson-1a06a6.netlify.app/`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
