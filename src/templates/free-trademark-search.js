import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SearchSection from "../components/Search & Search Result/search-section"
import Cta from "../components/Reusable Components/cta-section"
import FAQs from "../components/Reusable Components/faq-section"

const Search = ({ data }) => {
  if (!data) return null

  const saerch = data.prismicSearchPage || {}
  const saerchData = data.prismicSearchPage.data || {}

  const { lang, type, url } = data.prismicSearchPage || {}
  const alternateLanguages = saerch.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <Layout
      activeDoc={activeDoc}
      headerBody={data.prismicHeader}
      footerBody={data.prismicFooter}
    >
      <link rel="alternate" hreflang="en" href="https://markavowebsite.gatsbyjs.io" />
      <link rel="alternate" hreflang="es" href="https://markavowebsite.gatsbyjs.io" />
      <Seo title="Free Trademark Search" />
      <SearchSection
        heading={saerchData.banner_heading.text}
        headingColored={saerchData.banner_heading_colored.text}
        description={saerchData.banner_description.text}
      />
      <FAQs
        title={saerchData.faq_title.text}
        heading={saerchData.faq_heading.text}
        description={saerchData.faq_description.text}
        faq_contents={saerchData.faq_contents}
      />
      <Cta
        heading={saerchData.cta_heading.text}
        headingSecond={saerchData.cta_heading_2.text}
        description={saerchData.cta_description.text}
        buttonPlain={saerchData.cta_button_label.text}
        buttonPlainLink={saerchData.cta_button.url}
      />
    </Layout>
  )
}

export default Search

export const SearchQuery = graphql`
  query SearchQuery($lang: String) {
    prismicSearchPage(lang: { eq: $lang }) {
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
        faq_title {
          text
        }
        faq_heading {
          text
        }
        faq_description {
          text
        }
        faq_contents {
          faq_question {
            richText
            text
          }
          faq_answer {
            richText
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
        client_reviews {
          text
        }
        free_trademark_search {
          text
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
