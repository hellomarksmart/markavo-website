import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
<<<<<<< HEAD
import ContactSection from "../components/Reusable Sections/contact-us-section"
import Cta from "../components/Reusable Sections/cta-section"
=======
import ContactSection from "../components/contact-us-section"
import Cta from "../components/cta-section"
>>>>>>> 430397d3e1f54cc00216c49af68e2201d59ac23c

const Contact = props => {
  const contactData = props.data.prismicContactUsPage.data

  return (
    <Layout>
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
  query ContactUsPageQuery {
    prismicContactUsPage {
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
  }
`
