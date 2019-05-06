module.exports = {
  siteMetadata: {
    title: 'lululemon Blog Site',
    description: 'A site I built with Jason on FE Masters'
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        }
      }
    }
  ]
}