const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'adrianosmond.com - The personal site of Adrian Osmond',
    description: 'This is the personal site of front-end developer Adrian Osmond, where you can find out about me and my work.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages')
      }
    }
  ],
  pathPrefix: '/',
}
