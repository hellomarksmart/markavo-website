import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactSection from "../components/Contact Us/contact-us-section"
import Cta from "../components/Reusable Components/cta-section"

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
    <Layout
      activeDoc={activeDoc}
      headerBody={data.prismicHeader}
      footerBody={data.prismicFooter}
    >
      <Seo title={contactData.seo_title.text} />
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
        seo_title {
          text
        }
        heading {
          text
        }
        description {
          text
        }
        contact_items {
          qr_code {
            alt
            url
          }
          contact_title {
            text
          }
          contact_details {
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
