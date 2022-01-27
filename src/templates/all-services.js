import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ServicesSection from "../components/services-section"

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
    <Layout activeDoc={activeDoc}>
      <Seo title="Services" />
      <ServicesSection
        title={servcicesData.service_section_title.text}
        heading={servcicesData.service_section_heading.text}
        description={servcicesData.service_section_description.text}
        service_items={servcicesData.service_items}
      />
    </Layout>
  )
}

export default AllServices

export const ServicesQuery = graphql`
  query ServicesQuery($lang: String) {
    prismicServicesPage(lang: { eq: $lang }) {
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      data {
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
  }
`
