import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SearchTrademark from "../components/Search/index"

const Search = () => (
  <Layout>
    <Seo title="Home" />
    <SearchTrademark />
  </Layout>
)

export default Search
