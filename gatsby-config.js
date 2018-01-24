module.exports = {
  siteMetadata: {
    title: 'adrianosmond.com - The personal site of Adrian Osmond',
    description: 'This is the personal site of front-end developer Adrian Osmond, where you can find out about me and my work.'
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
