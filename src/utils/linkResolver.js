const { defaultLanguage } = require("../../prismic-configuration")

/**
 * The Link Resolver used for the Prismic repository. This function converts a
 * Prismic document to a URL within your app. It is used throughout your app to
 * resolve document links and support editor previews.
 *
 * {@link https://prismic.io/docs/technologies/link-resolver-gatsby}
 *
 * @param doc Prismic document to resolve to a URL within your app.
 *
 * @returns URL for the provided Prismic document.
 *
 * @type import('@prismicio/helpers').LinkResolverFunction
 */
exports.linkResolver = doc => {
  switch (doc.type) {
    case "home_page": {
      return doc.lang === defaultLanguage ? "/" : `/${doc.lang}`
    }

    case "page": {
      return doc.lang === defaultLanguage
        ? `/page/${doc.uid}`
        : `/page/${doc.lang}/${doc.uid}`
    }

    case "client_reviews_page": {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${doc.uid}/${doc.lang}`
    }

    case "not_found": {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${doc.uid}/${doc.lang}`
    }

    case "about_us_page": {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${doc.uid}/${doc.lang}`
    }

    case "services_page": {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${doc.uid}/${doc.lang}`
    }

    case "payment_received": {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${doc.uid}/${doc.lang}`
    }

    case "contact_us_page": {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${doc.uid}/${doc.lang}`
    }

    case "search_page": {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${doc.uid}/${doc.lang}`
    }

    case "text_template": {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${doc.uid}/${doc.lang}`
    }

    case "service_single_page": {
      return doc.lang === defaultLanguage
        ? `/services/${doc.uid}`
        : `/services/${doc.uid}/${doc.lang}`
    }

    default:
      return "/"
  }
}
