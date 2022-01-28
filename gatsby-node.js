const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      home_page: allPrismicHomePage {
        nodes {
          id
          lang
          url
        }
      }
      client_reviews_page: allPrismicClientReviewsPage {
        nodes {
          id
          lang
          url
        }
      }
      not_found: allPrismicNotFound {
        nodes {
          id
          lang
          url
        }
      }
      about_us_page: allPrismicAboutUsPage {
        nodes {
          id
          lang
          url
        }
      }
      services_page: allPrismicServicesPage {
        nodes {
          id
          lang
          url
        }
      }
      payment_received: allPrismicPaymentReceived {
        nodes {
          id
          lang
          url
        }
      }
      contact_us_page: allPrismicContactUsPage {
        nodes {
          id
          lang
          url
        }
      }
      text_template: allPrismicTextTemplate {
        nodes {
          id
          lang
          url
        }
      }
      search_page: allPrismicSearchPage {
        nodes {
          id
          lang
          url
        }
      }
      service_single: allPrismicServiceSinglePage {
        nodes {
          uid
          id
          lang
          url
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const homePage = result.data.home_page.nodes
  const clientReviewsPage = result.data.client_reviews_page.nodes
  const notFound = result.data.not_found.nodes
  const aboutUsPage = result.data.about_us_page.nodes
  const servicesPage = result.data.services_page.nodes
  const paymentReceived = result.data.payment_received.nodes
  const contactUsPage = result.data.contact_us_page.nodes
  const textTemplate = result.data.text_template.nodes
  const searchPage = result.data.search_page.nodes
  const singleService = result.data.service_single.nodes

  homePage.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/homepage.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  clientReviewsPage.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/markavo-reviews.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  notFound.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/404.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  aboutUsPage.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/about-us.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  servicesPage.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/all-services.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  paymentReceived.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/payment-received.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  contactUsPage.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/contact-us.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  textTemplate.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/text-template.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  searchPage.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(
        __dirname,
        "src/templates/free-trademark-search.js"
      ),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })
}
