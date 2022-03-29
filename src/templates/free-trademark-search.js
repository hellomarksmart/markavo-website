import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Seo from "../components/seo"
import SearchSection from "../components/Search & Search Result/search-section"
import Cta from "../components/Reusable Components/cta-section"
import FAQs from "../components/Reusable Components/faq-section"

import { GatsbySeo } from 'gatsby-plugin-next-seo';

const Search = ({ data }) => {
  if (!data) return null

  const search = data.prismicSearchPage || {}
  const searchData = data.prismicSearchPage.data || {}

  const { lang, type, url } = data.prismicSearchPage || {}
  const alternateLanguages = search.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <>
      <GatsbySeo
        title={searchData.seo_title.text}
        description={searchData.seo_desc.text}
        languageAlternates={[
          {
            hrefLang: 'en',
            href: 'https://markavo.com/free-trademark-search',
          },
          {
            hrefLang: 'es',
            href: 'https://markavo.com/es/gratis-busqueda-de-marcas',
          },
          {
            hrefLang: 'x-default',
            href: 'https://markavo.com/free-trademark-search',
          }
        ]} />
      <Layout
        activeDoc={activeDoc}
        headerBody={data.prismicHeader}
        footerBody={data.prismicFooter}
      >
        {/* <Seo title={searchData.seo_title.text} /> */}
        <SearchSection
          heading={searchData.banner_heading.text}
          headingColored={searchData.banner_heading_colored.text}
          description={searchData.banner_description.text}
          searchResultDesc={searchData.search_result_desc.text}
          coloredSearchResultDesc={searchData.colored_search_result_desc.text}
          coloredSearchResultLink={searchData.colored_search_result_link.url}
        />
        <FAQs
          title={searchData.faq_title.text}
          heading={searchData.faq_heading.text}
          description={searchData.faq_description.text}
          faq_contents={searchData.faq_contents}
        />
        <Cta
          heading={searchData.cta_heading.text}
          headingSecond={searchData.cta_heading_2.text}
          description={searchData.cta_description.text}
          buttonPlain={searchData.cta_button_label.text}
          buttonPlainLink={searchData.cta_button.url}
        />
      </Layout>
    </>
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
        search_result_desc {
          text
        }
        colored_search_result_desc {
          text
        }
        colored_search_result_link {
          url
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
