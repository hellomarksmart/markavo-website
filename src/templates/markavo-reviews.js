import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Seo from "../components/seo"
import Banner from "../components/Reusable Components/banner"
import ClientReviewsSection from "../components/Reviews/client-reviews-section"
import Cta from "../components/Reusable Components/cta-section"

import { GatsbySeo } from 'gatsby-plugin-next-seo';

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
    <>
      <GatsbySeo
        title={clientReviewsData.seo_title.text}
        description={clientReviewsData.seo_desc.text}
        languageAlternates={[
          {
            hrefLang: 'en',
            href: 'https://markavo.com/markavo-reviews',
          },
          {
            hrefLang: 'es',
            href: 'https://markavo.com/es/markavo-resenas',
          },
          {
            hrefLang: 'x-default',
            href: 'https://markavo.com/markavo-reviews',
          }
        ]}
      />
      <Layout
        activeDoc={activeDoc}
        headerBody={data.prismicHeader}
        footerBody={data.prismicFooter}
      >
        {/* <Seo title={clientReviewsData.seo_title.text} /> */}
        <Banner
          heading={clientReviewsData.banner_heading.text}
          headingColored={clientReviewsData.banner_heading_colored.text}
          description={clientReviewsData.banner_description.text}
          buttonColored={clientReviewsData.button_1_label.text}
          buttonColoredLink={clientReviewsData.button_1.url}
          buttonPlain={clientReviewsData.button_2_label.text}
          buttonPlainLink={clientReviewsData.button_2.url} />
        <ClientReviewsSection
          reviews={clientReviewsData.reviews}
        />
        <Cta
          heading={clientReviewsData.cta_heading.text}
          headingSecond={clientReviewsData.cta_heading_2.text}
          description={clientReviewsData.cta_description.text}
          buttonPlain={clientReviewsData.cta_button_label.text}
          buttonPlainLink={clientReviewsData.cta_button.url} />
      </Layout></>
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
        seo_title {
          text
        }
        seo_desc {
          text
        }
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
    prismicHeader(lang: { eq: $lang }) {
      data {
        phone_number {
          text
        }
        contact_us {
          text
        }
        contact_us_link {
          url
        }
        client_reviews {
          text
        }
        client_reviews_link {
          url
        }
        free_trademark_search {
          text
        }
        free_trademark_search_link {
          url
        }
        service_title {
          text
        }
        branding_tools_title {
          text
        }
        header_logo {
          url
        }
        header_link {
          url
        }
        services {
          name {
            text
          }
          link {
            url
          }
          icon {
            alt
            url
          }
          description {
            text
          }
        }
        all_services {
          name {
            text
          }
          link {
            url
          }
          icon {
            alt
            url
          }
        }
        branding_tools {
          name {
            text
          }
          link {
            url
          }
          description {
            text
          }
        }
        about_us {
          text
        }
        about_link {
          url
        }
      }
    }
    prismicFooter(lang: { eq: $lang }) {
      data {
        application_title {
          text
        }
        applications {
          link {
            url
          }
          link_name {
            text
          }
          link_title {
            text
          }
        }
        company_title {
          text
        }
        company {
          link {
            url
          }
          link_name {
            text
          }
          link_title {
            text
          }
        }
        disputes_title {
          text
        }
        disputes {
          link {
            url
          }
          link_name {
            text
          }
          link_title {
            text
          }
        }
        registration_title {
          text
        }
        registrations {
          link {
            url
          }
          link_name {
            text
          }
          link_title {
            text
          }
        }
        newsletter_title {
          text
        }
        newsletter_desc {
          text
        }
        newsletter_placeholder {
          text
        }
        newsletter_button_label {
          text
        }
        footer_copyright {
          text
        }
      }
    }
  }
`
