import * as React from "react"
import { graphql } from "gatsby"
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from "../components/layout"
// import Seo from "../components/seo"
import Breadcrumb from "../components/Text Template/breadcrumbs"
import TextTemplateSection from "../components/Text Template/text-template-section"
import Cta from "../components/Reusable Components/cta-section"

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
  console.log("Text Template", activeDoc)

  return (
    <>
      <GatsbySeo
        title={textTemplateData.seo_title.text}
        description={textTemplateData.seo_desc.text}
        languageAlternates={[
          {
            hrefLang: 'en',
            href: 'https://markavo.com/' + textTemplateData.en_link.text,
          },
          {
            hrefLang: 'es',
            href: 'https://markavo.com/es/' + textTemplateData.es_link.text,
          },
          {
            hrefLang: 'x-default',
            href: 'https://markavo.com/' + textTemplateData.en_link.text,
          }
        ]} />
      <Layout
        activeDoc={activeDoc}
        headerBody={data.prismicHeader}
        footerBody={data.prismicFooter}
      >
        {/* <Seo title={textTemplateData.seo_title.text} /> */}
        <Breadcrumb breadcrumbs_item={textTemplateData.breadcrumbs} />
        <TextTemplateSection
          sub_heading={textTemplateData.sub_heading.text}
          heading={textTemplateData.heading.text}
          description={textTemplateData.description.text}
          page_content={textTemplateData.page_contents} />
        <Cta
          heading={textTemplateData.cta_heading.text}
          headingSecond={textTemplateData.cta_heading_2.text}
          description={textTemplateData.cta_description.text}
          buttonPlain={textTemplateData.cta_button_label.text}
          buttonPlainLink={textTemplateData.cta_button.url} />
      </Layout>
    </>
  )
}

export default TextTemplate

export const TextTemplateQuery = graphql`
  query TextTemplateQuery($lang: String, $id: String) {
    prismicTextTemplate(id: { eq: $id }, lang: { eq: $lang }) {
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
        seo_title {
          text
        }
        seo_desc {
          text
        }
        en_link {
          text
        }
        es_link {
          text
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
            alt
            url
          }
          image_caption {
            text
          }
          heading1 {
            text
          }
          rich_text {
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
        cta_heading {
          text
        }
        cta_heading_2 {
          text
        }
        cta_description {
          text
        }
        cta_button_label {
          text
        }
        cta_button {
          url
        }
      }
    }
    prismicHeader(lang: { eq: $lang }) {
      data {
        phone_number {
          text
        }
        contact_us {
          text
        }
        contact_us_link {
          url
        }
        client_reviews {
          text
        }
        client_reviews_link {
          url
        }
        free_trademark_search {
          text
        }
        free_trademark_search_link {
          url
        }
        service_title {
          text
        }
        branding_tools_title {
          text
        }
        header_logo {
          url
        }
        header_link {
          url
        }
        services {
          name {
            text
          }
          link {
            url
          }
          icon {
            alt
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
            url
          }
          icon {
            alt
            url
          }
        }
        branding_tools {
          name {
            text
          }
          link {
            url
          }
          description {
            text
          }
        }
        about_us {
          text
        }
        about_link {
          url
        }
      }
    }
    prismicFooter(lang: { eq: $lang }) {
      data {
        application_title {
          text
        }
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
        company_title {
          text
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
        disputes_title {
          text
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
        registration_title {
          text
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
        newsletter_title {
          text
        }
        newsletter_desc {
          text
        }
        newsletter_placeholder {
          text
        }
        newsletter_button_label {
          text
        }
        footer_copyright {
          text
        }
      }
    }
  }
`
