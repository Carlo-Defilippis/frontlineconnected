module.exports = {
  siteMetadata: {
    title: 'Front Line Solutions',
    menuLinks:[
        {
            name:'IndexPage',
            link:'/'
        },
        {
            name:'mydashboard',
            link:'/app/mydashoard'
        },
        {
            name:'updateProfile',
            link:'/app/update-profile'
        },
        {
            name:'Login',
            link:'/login'
        },
        {
            name:'Signup',
            link:'/signup'
        }
      ],
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
    'gatsby-plugin-sass',
  ],
}
