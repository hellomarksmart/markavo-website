import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/AllServices/index"

const AllServices = () => (
  <Layout>
    <Seo title="Home" />
    <Services />
  </Layout>
)

export default AllServices
