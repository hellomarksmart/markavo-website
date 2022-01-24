import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Reusable Sections/banner"
import AboutSection from "../components/Reusable Sections/about-section"
import Cta from "../components/Reusable Sections/cta-section"

const About = props => {
  const abouteData = props.data.prismicAboutUsPage.data

  return (
    <Layout>
      <Seo title="About" />
      <Banner
        heading={abouteData.banner_heading.text}
        headingColored={abouteData.banner_heading_colored.text}
        description={abouteData.banner_description.text}
        buttonColored={abouteData.button_1_label.text}
        buttonColoredLink={abouteData.button_1.url}
        buttonPlain={abouteData.button_2_label.text}
        buttonPlainLink={abouteData.button_2.url}
      />
      <AboutSection
        heading={abouteData.about_section_heading.text}
        description={abouteData.about_section_description.text}
        about_items={abouteData.about_items}
      />
      <Cta
        heading={abouteData.cta_heading.text}
        headingSecond={abouteData.cta_heading_2.text}
        description={abouteData.cta_description.text}
        buttonPlain={abouteData.cta_button_label.text}
        buttonPlainLink={abouteData.cta_button.url}
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
