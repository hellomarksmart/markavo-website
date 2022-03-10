require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const prismicConfig = require("./prismic-configuration")

module.exports = {
  siteMetadata: {
    title: `Markavo`,
    description: `We help Chinese companies register their trademarks in the United States.`,
    author: `@gatsbyjs`,
    siteUrl: `https://markavo.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://markavo.com`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
        sitemap: 'https://markavo.com/sitemap/',
      }
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: prismicConfig.prismicRepo,
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        linkResolver: require("./src/utils/linkResolver").linkResolver,
        schemas: {
          home_page: require("./src/schema/home.json"),
          client_reviews_page: require("./src/schema/client-reviews.json"),
          services_page: require("./src/schema/services.json"),
          footer: require("./src/schema/footer.json"),
          about_us_page: require("./src/schema/about-us.json"),
          not_found: require("./src/schema/not-found.json"),
          payment_received: require("./src/schema/payment-received.json"),
          contact_us_page: require("./src/schema/contact-us.json"),
          text_template: require("./src/schema/text-template.json"),
          search_page: require("./src/schema/search.json"),
          header: require("./src/schema/header.json"),
          service_single_page: require("./src/schema/single-service.json"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Icons/markavo-favicon.png`, // This path is relative to the root of the site.
      },
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-59XBP6W",
        selfHostedOrigin: "https://insight.markavo.com",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
