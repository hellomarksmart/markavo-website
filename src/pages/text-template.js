import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TextTemplateSection from "../components/Reusable Sections/text-template-section"

const TextTemplate = props => {
  const textTemplateData = props.data.prismicTextTemplate.data

  return (
    <Layout>
      <Seo title="Text Template" />
      <TextTemplateSection
        sub_heading={textTemplateData.sub_heading.text}
        heading={textTemplateData.heading.text}
        description={textTemplateData.description.text}
        page_content={textTemplateData.page_contents}
      />
    </Layout>
  )
}

export default TextTemplate

export const TextTemplateQuery = graphql`
  query TextTemplateQuery {
    prismicTextTemplate {
      data {
        sub_heading {
          text
        }
        heading {
          text
        }
        description {
          text
        }
        page_contents {
          image {
            url
          }
          image_caption {
            text
          }
          heading1 {
            text
          }
          paragraph {
            text
          }
          list {
            text
          }
          blockquote {
            text
          }
          video_link {
            url
          }
          video_title {
            text
          }
        }
      }
    }
  }
`
