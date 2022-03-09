import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PaymentReceived = ({ data }) => {
  if (!data) return null

  const paymentReceived = data.prismicPaymentReceived || {}
  const paymentReceivedData = data.prismicPaymentReceived.data || {}

  const { lang, type, url } = data.prismicPaymentReceived || {}
  const alternateLanguages = paymentReceived.alternate_languages || []
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
      <Seo title="Home" />
      <div className="max-w-default mx-auto relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-4xl mx-auto">
            <p className="mt-8 text-xl text-gray-500 leading-8">
              {paymentReceivedData.message_1.text}
            </p>
            <div className="iframe-holder">
              <iframe
                id="iframeID"
                src={paymentReceivedData.video_link.url}
                title={paymentReceivedData.message_2.text}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowfullscreen="true"
              ></iframe>
            </div>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              {paymentReceivedData.message_3.text}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PaymentReceived

export const PaymentReceivedQuery = graphql`
  query PaymentReceivedQuery($lang: String) {
    prismicPaymentReceived(lang: { eq: $lang }) {
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      data {
        message_1 {
          text
        }
        message_2 {
          text
        }
        video_link {
          url
        }
        message_3 {
          text
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
