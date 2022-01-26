import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = props => {
  const paymentReceivedData = props.data.prismicPaymentReceived.data

  return (
    <Layout>
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

export default IndexPage

export const PaymentReceivedQuery = graphql`
  query PaymentReceivedQuery {
    prismicPaymentReceived {
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
