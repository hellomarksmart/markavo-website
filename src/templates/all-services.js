import * as React from "react"
import { graphql } from "gatsby"
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from "../components/layout"
// import Seo from "../components/seo"
import ServicesSection from "../components/Services & Price Services/services-section"

const AllServices = ({ data }) => {
  if (!data) return null

  const services = data.prismicServicesPage || {}
  const servcicesData = data.prismicServicesPage.data || {}

  const { lang, type, url } = data.prismicServicesPage || {}
  const alternateLanguages = services.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <>
      <GatsbySeo
        title={servcicesData.seo_title.text}
        languageAlternates={[
          {
            hrefLang: 'en',
            href: 'https://markavo.com/' + servcicesData.en_link.text,
          },
          {
            hrefLang: 'es',
            href: 'https://markavo.com/es/' + servcicesData.es_link.text,
          },
          {
            hrefLang: 'x-default',
            href: 'https://markavo.com/' + servcicesData.en_link.text,
          }
        ]} />
      <Layout
        activeDoc={activeDoc}
        headerBody={data.prismicHeader}
        footerBody={data.prismicFooter}
      >
        {/* <Seo title={servcicesData.seo_title.text} /> */}
        <ServicesSection
          title={servcicesData.service_section_title.text}
          heading={servcicesData.service_section_heading.text}
          description={servcicesData.service_section_description.text}
          service_items={servcicesData.service_items} />
      </Layout></>
  )
}

export default AllServices

export const ServicesQuery = graphql`
  query ServicesQuery($lang: String, $id: String) {
    prismicServicesPage(id: { eq: $id }, lang: { eq: $lang }) {
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
        en_link {
          text
        }
        es_link {
          text
        }
        service_section_title {
          text
        }
        service_section_heading {
          text
        }
        service_section_description {
          text
        }
        service_items {
          title {
            text
          }
          content {
            text
          }
          link_label {
            text
          }
          link {
            url
          }
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
