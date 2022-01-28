import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Breadcrumb from "../components/breadcrumbs"
import TextTemplateSection from "../components/text-template-section"

const TextTemplate = ({ data }) => {
  if (!data) return null

  const textTemp = data.prismicTextTemplate || {}
  const textTemplateData = data.prismicTextTemplate.data || {}

  const { lang, type, url } = data.prismicTextTemplate || {}
  const alternateLanguages = textTemp.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  console.log("lang text template", alternateLanguages)

  return (
    <Layout activeDoc={activeDoc}>
      <Seo title="Text Template" />
      <Breadcrumb breadcrumbs_item={textTemplateData.breadcrumbs} />
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
  query TextTemplateQuery($lang: String) {
    prismicTextTemplate(lang: { eq: $lang }) {
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      data {
        breadcrumbs {
          page_current
          page_current_label {
            text
          }
          page_current_link {
            url
          }
        }
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
          list_one {
            text
          }
          list_two {
            text
          }
          list_three {
            text
          }
          list_four {
            text
          }
          list_five {
            text
          }
          list_six {
            text
          }
          list_seven {
            text
          }
          list_eight {
            text
          }
          list_nine {
            text
          }
          list_ten {
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
