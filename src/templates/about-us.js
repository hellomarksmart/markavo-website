import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/banner"
import AboutSection from "../components/about-section"
import Cta from "../components/cta-section"

const About = ({ data }) => {
  if (!data) return null

  const about = data.prismicAboutUsPage || {}
  const aboutData = data.prismicAboutUsPage.data || {}

  const { lang, type, url } = data.prismicAboutUsPage || {}
  const alternateLanguages = about.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <Layout
      activeDoc={activeDoc}
      headerBody={data.prismicHeader}
      footerBody={data.prismicFooter}
    >
      <Seo title="About Us" />
      <Banner
        heading={aboutData.banner_heading.text}
        headingColored={aboutData.banner_heading_colored.text}
        description={aboutData.banner_description.text}
        buttonColored={aboutData.button_1_label.text}
        buttonColoredLink={aboutData.button_1.url}
        buttonPlain={aboutData.button_2_label.text}
        buttonPlainLink={aboutData.button_2.url}
      />
      <AboutSection
        heading={aboutData.about_section_heading.text}
        description={aboutData.about_section_description.text}
        about_items={aboutData.about_items}
      />
      <Cta
        heading={aboutData.cta_heading.text}
        headingSecond={aboutData.cta_heading_2.text}
        description={aboutData.cta_description.text}
        buttonPlain={aboutData.cta_button_label.text}
        buttonPlainLink={aboutData.cta_button.url}
      />
    </Layout>
  )
}

export default About

export const AboutUsPageQuery = graphql`
  query AboutUsPageQuery($lang: String) {
    prismicAboutUsPage(lang: { eq: $lang }) {
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      data {
        banner_heading {
          text
        }
        banner_heading_colored {
          text
        }
        banner_description {
          text
        }
        button_2_label {
          text
        }
        button_1_label {
          text
        }
        button_1 {
          url
        }
        button_2 {
          url
        }
        about_section_heading {
          text
        }
        about_section_description {
          text
        }
        about_items {
          image {
            url
          }
          name {
            text
          }
          position {
            text
          }
          description {
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
        header_logo {
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
