import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Reusable Sections/banner"
import AboutSection from "../components/Reusable Sections/about-section"
import Cta from "../components/Reusable Sections/cta-section"

const About = props => {
  const aboutData = props.data.prismicAboutUsPage.data

  return (
    <Layout>
      <Seo title="About" />
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
  query AboutUsPageQuery {
    prismicAboutUsPage {
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
  }
`
