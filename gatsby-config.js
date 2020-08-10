const resolveConfig = require( "tailwindcss/resolveConfig" )
const tailwindConfig = require( "./tailwind.config.js" )

const fullConfig = resolveConfig( tailwindConfig )

module.exports = {
  siteMetadata: {
    title: `akalustat.com`,
    description: `Read the bani Akal Ustat`,
    author: `@akalustat`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        display: `minimal-ui`,
        icon: `src/images/websiteicon.jpeg`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require( `tailwindcss` )( tailwindConfig ),
          require( `autoprefixer` ),
          ...( process.env.NODE_ENV === `production`
            ? [ require( `cssnano` ) ]
            : [] ),
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: "BaniDB",
        fieldName: "banidb",
        url: "https://api.banidb.com/v2/graphql"
      }
    }
  ],
}
