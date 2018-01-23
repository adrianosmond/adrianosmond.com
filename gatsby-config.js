module.exports = {
  siteMetadata: {
    title: 'adrianosmond.com - The personal site of Adrian Osmond',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
  ],
  pathPrefix: '/',
}
