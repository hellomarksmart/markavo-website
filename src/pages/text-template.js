import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import textTemplateComponent from "../components/Text Template Page/index"

const TextTemplate = () => (
  <Layout>
    <Seo title="Text Template" />
    <textTemplateComponent />
  </Layout>
)

export default TextTemplate
