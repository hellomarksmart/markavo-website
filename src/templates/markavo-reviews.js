import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/banner"
import ClientReviewsSection from "../components/client-reviews-section"
import Cta from "../components/cta-section"

const ClientReviews = ({ data }) => {
  if (!data) return null

  const clientReviews = data.prismicClientReviewsPage || {}
  const clientReviewsData = data.prismicClientReviewsPage.data || {}

  const { lang, type, url } = data.prismicClientReviewsPage || {}
  const alternateLanguages = clientReviews.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <Layout activeDoc={activeDoc}>
      <Seo title="Reviews" />
      <Banner
        heading={clientReviewsData.banner_heading.text}
        headingColored={clientReviewsData.banner_heading_colored.text}
        description={clientReviewsData.banner_description.text}
        buttonColored={clientReviewsData.button_1_label.text}
        buttonColoredLink={clientReviewsData.button_1.url}
        buttonPlain={clientReviewsData.button_2_label.text}
        buttonPlainLink={clientReviewsData.button_2.url}
      />
      <ClientReviewsSection reviews={clientReviewsData.reviews} />
      <Cta
        heading={clientReviewsData.cta_heading.text}
        headingSecond={clientReviewsData.cta_heading_2.text}
        description={clientReviewsData.cta_description.text}
        buttonPlain={clientReviewsData.cta_button_label.text}
        buttonPlainLink={clientReviewsData.cta_button.url}
      />
    </Layout>
  )
}

export default ClientReviews

export const ClientReviewsQuery = graphql`
  query ClientReviewsQuery($lang: String) {
    prismicClientReviewsPage(lang: { eq: $lang }) {
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      data {
        banner_heading {
          text
        }
        banner_heading_colored {
          text
        }
        banner_description {
          text
        }
        button_2_label {
          text
        }
        button_1_label {
          text
        }
        button_1 {
          url
        }
        button_2 {
          url
        }
        reviews {
          reviewer_rate
          reviewer_name {
            text
          }
          reviewer_message {
            text
          }
        }
        cta_heading {
          text
        }
        cta_heading_2 {
          text
        }
        cta_description {
          text
        }
        cta_button_label {
          text
        }
        cta_button {
          url
        }
      }
    }
  }
`
