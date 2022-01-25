require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Markavo`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.GATSBY_PRISMIC_REPO_NAME}`,
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        linkResolver:
          ({ node, key, value }) =>
          post =>
            `/${post.uid}`,
        schemas: {
          home_page: require("./src/schema/home.json"),
          client_reviews_page: require("./src/schema/client-reviews.json"),
          services_page: require("./src/schema/services.json"),
          one_price_service: require("./src/schema/one-price-service.json"),
          two_price_service: require("./src/schema/two-price-service.json"),
          three_price_service: require("./src/schema/three-price-service.json"),
          footer: require("./src/schema/footer.json"),
          about_us_page: require("./src/schema/about-us.json"),
          not_found: require("./src/schema/not-found.json"),
          payment_received: require("./src/schema/payment-received.json"),
          contact_us_page: {}
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
        icon: `src/images/markavo-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
