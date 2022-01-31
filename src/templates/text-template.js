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
    <Layout
      activeDoc={activeDoc}
      headerBody={data.prismicHeader}
      footerBody={data.prismicFooter}
    >
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
          list {
            richText
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
    prismicHeader(lang: { eq: $lang }) {
      data {
        phone_number {
          text
        }
        header_logo {
          url
        }
        services {
          name {
            text
          }
          link {
            uid
          }
          icon {
            url
          }
          description {
            text
          }
        }
        all_services {
          name {
            text
          }
          link {
            uid
          }
          icon {
            url
          }
        }
        branding_tools {
          name {
            text
          }
          link {
            uid
          }
          description {
            text
          }
        }
      }
    }
    prismicFooter(lang: { eq: $lang }) {
      data {
        applications {
          link {
            url
          }
          link_name {
            text
          }
          link_title {
            text
          }
        }
        company {
          link {
            url
          }
          link_name {
            text
          }
          link_title {
            text
          }
        }
        disputes {
          link {
            url
          }
          link_name {
            text
          }
          link_title {
            text
          }
        }
        registrations {
          link {
            url
          }
          link_name {
            text
          }
          link_title {
            text
          }
        }
        footer_copyright {
          text
        }
      }
    }
  }
`
