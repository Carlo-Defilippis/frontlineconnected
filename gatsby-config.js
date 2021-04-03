require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Front Line Solutions',
    author: 'Carlo DeFilippis with the help of Benjamin Saddoris',
    description: "Providing form solutions to our hero's in the field",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'frontlinesolutions',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/FLSicon_02.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.GATSBY_REACT_APP_APIKEY,
          authDomain: process.env.GATSBY_REACT_APP_AUTHDOMAIN,
          databaseURL: process.env.GATSBY_REACT_APP_DATABASEURL,
          projectId: process.env.GATSBY_REACT_APP_PROJECTID,
          storageBucket: process.env.GATSBY_REACT_APP_STORAGEBUCKET,
          messagingSenderId: process.env.GATSBY_REACT_APP_MESSANGINGSENDERID
        }
      }
    },
    'gatsby-plugin-sass',
  ],
}
