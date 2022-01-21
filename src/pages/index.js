import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/Home/index"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
