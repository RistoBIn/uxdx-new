require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'UXDX',
    titleTemplate: '%s',
    description: 'UXDX brings together UX, Design, Dev and Product to learn how to shift from delivering projects to working as cross-functional teams that build products customers actually want. Come and join us on 8 - 9 October, 2020 in Dublin to learn more.',
    url: 'https://www.uxdx.com', // No trailing slash allowed!
    image: '/img/meta2020.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@uxdxconf',
    siteUrl: 'https://uxdx.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-root-import',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-netlify',
    '@rshackleton/gatsby-transformer-kontent-image',
    // 'gatsby-plugin-preact',

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/generic-*', 'framework']
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TLSPK2H',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' }

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Roboto Condensed: 100,300,400,700',
          'Oswald:200,400,500,600,700'
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'UXDX',
        short_name: 'UXDX',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'assets/icons/uxdx.png'
      }
    },
    {
      resolve: '@kentico/gatsby-source-kontent',
      options: {
        deliveryClientConfig: {
          projectId: process.env.KONTENT_ID
        },
        languageCodenames: [
          'default'
        ]
      }
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 3,
        tables: [
          {
            baseId: process.env.AIRTABLE_PRODUCTION_BASE,
            tableName: 'Conference',
            mapping: { Conference_Header_Image: 'fileNode' },
            tableLinks: ['Venues', 'Sessions', 'Agenda'],
            createSeparateNodeType: true
          },
          {
            baseId: process.env.AIRTABLE_PRODUCTION_BASE,
            tableName: 'Highlights',
            createSeparateNodeType: true
          },
          {
            baseId: process.env.AIRTABLE_PRODUCTION_BASE,
            tableName: 'Stages',
            createSeparateNodeType: true
          },
          {
            baseId: process.env.AIRTABLE_PRODUCTION_BASE,
            tableName: 'Streams',
            createSeparateNodeType: true
          },
          {
            baseId: process.env.AIRTABLE_PRODUCTION_BASE,
            tableName: 'Venues',
            mapping: { Venue_Map: 'fileNode', Venue_Sponsor_Logo: 'fileNode' },
            createSeparateNodeType: true
          },
          {
            baseId: process.env.AIRTABLE_PRODUCTION_BASE,
            tableName: 'Speakers',
            tableView: 'Integration Published Speakers',
            tableLinks: ['Conference', 'Highlight', 'Sessions'],
            mapping: { Speaker_Profile_Picture: 'fileNode' },
            createSeparateNodeType: true
          },
          {
            baseId: process.env.AIRTABLE_PRODUCTION_BASE,
            tableName: 'Sessions',
            tableView: 'Integration Published Sessions',
            tableLinks: ['Stream', 'Speakers', 'Conference', 'Highlight', 'Agenda'],
            mapping: { Video_Image: 'fileNode' },
            createSeparateNodeType: true
          },
          {
            baseId: process.env.AIRTABLE_PRODUCTION_BASE,
            tableName: 'Tickets',
            tableLinks: ['Conference'],
            createSeparateNodeType: true
          },
          {
            baseId: process.env.AIRTABLE_PRODUCTION_BASE,
            tableName: 'Agendas',
            tableLinks: ['Conference', 'Session', 'Stage'],
            createSeparateNodeType: true
          },
          {
            baseId: process.env.AIRTABLE_PRODUCTION_BASE,
            tableName: 'Countdown',
            tableLinks: ['Conference'],
            createSeparateNodeType: true
          },
          {
            baseId: process.env.AIRTABLE_PRODUCTION_BASE,
            tableName: 'Partners',
            tableLinks: ['Conference', 'Highlights'],
            createSeparateNodeType: true
          },
          {
            baseId: process.env.AIRTABLE_ATTENDEES_BASE,
            tableName: 'Companies',
            tableView: 'Highlighted Companies',
            mapping: { Company_Logo: 'fileNode' },
            createSeparateNodeType: true
          }
          // {
          //   baseId: process.env.AIRTABLE_ATTENDEES_BASE,
          //   tableName: 'Emails',
          //   createSeparateNodeType: true
          // },
          // {
          //   baseId: process.env.AIRTABLE_ATTENDEES_BASE,
          //   tableName: 'People',
          //   createSeparateNodeType: true
          // },
          // {
          //   baseId: process.env.AIRTABLE_ATTENDEES_BASE,
          //   tableName: 'Purchased Tickets',
          //   // mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
          //   tableLinks: ['Ticket_Full_Name', 'Ticket_Email', 'Ticket_Company', 'Conference'],
          //   createSeparateNodeType: true
          // }
        ]
      }
    },
    {
      resolve: 'gatsby-source-ghost',
      options: {
        apiUrl: process.env.GHOST_API_URL,
        contentApiKey: process.env.GHOST_CONTENT_API,
        version: 'v2' // Ghost API version, optional, defaults to "v3". Pass in "v2" if your Ghost install is not on 3.0 yet!!!
      }
    }
  ]
}
