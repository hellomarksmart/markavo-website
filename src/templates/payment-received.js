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
    <Layout activeDoc={activeDoc}>
      <Seo title="Home" />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-4xl mx-auto">
            <p className="mt-8 text-xl text-gray-500 leading-8">
              {paymentReceivedData.message_1.text}
            </p>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              {paymentReceivedData.message_2.text}
            </p>
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
        message_3 {
          text
        }
      }
    }
  }
`
