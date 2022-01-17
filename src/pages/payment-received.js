import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Payment from "../components/Payment Received/index"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Payment />
  </Layout>
)

export default IndexPage
