import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SearchSection from "../components/search-section"
import Cta from "../components/cta-section"
import FAQs from "../components/faq-section"

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
    <Layout activeDoc={activeDoc}>
      <Seo title="Free Trademark Search" />
      <SearchSection
        heading={saerchData.banner_heading.text}
        headingColored={saerchData.banner_heading_colored.text}
        description={saerchData.banner_description.text}
      />
      <FAQs
        heading={saerchData.faq_heading.text}
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
        faq_heading {
          text
        }
        faq_contents {
          faq_question {
            text
          }
          faq_answer {
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
