import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/About/index"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <About />
  </Layout>
)

export default IndexPage
