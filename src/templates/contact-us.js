import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactSection from "../components/contact-us-section"
import Cta from "../components/cta-section"

const Contact = ({ data }) => {
  if (!data) return null

  const notFound = data.prismicContactUsPage || {}
  const contactData = data.prismicContactUsPage.data || {}

  const { lang, type, url } = data.prismicContactUsPage || {}
  const alternateLanguages = notFound.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <Layout activeDoc={activeDoc} headerBody={data.prismicHeader}>
      <Seo title="Contact" />
      <ContactSection
        heading={contactData.heading.text}
        description={contactData.description.text}
        contact_items={contactData.contact_items}
      />
      <Cta
        heading={contactData.cta_heading.text}
        headingSecond={contactData.cta_heading_2.text}
        description={contactData.cta_description.text}
        buttonPlain={contactData.cta_button_label.text}
        buttonPlainLink={contactData.cta_button.url}
      />
    </Layout>
  )
}

export default Contact

export const ContactUsPageQuery = graphql`
  query ContactUsPageQuery($lang: String) {
    prismicContactUsPage(lang: { eq: $lang }) {
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      data {
        heading {
          text
        }
        description {
          text
        }
        contact_items {
          qr_code {
            url
          }
          contact_title {
            text
          }
          contact_details {
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
        header_logo {
          url
        }
        services {
          name {
            text
          }
          link {
            uid
          }
          icon {
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
            uid
          }
          icon {
            url
          }
        }
        branding_tools {
          name {
            text
          }
          link {
            uid
          }
          description {
            text
          }
        }
      }
    }
  }
`
