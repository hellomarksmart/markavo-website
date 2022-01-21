import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ServicesSection from "../components/Reusable Sections/services-section"

const AllServices = props => {
  const servcicesData = props.data.prismicServicesPage.data

  return (
    <Layout>
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
  query ServicesQuery {
    prismicServicesPage {
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
