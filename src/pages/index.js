import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Reusable Sections/banner"
import Home from "../components/Home/index"

const IndexPage = props => {
  const homeData = props.data.prismicHomePage.data

  return (
    <Layout>
      <Seo title="Home" />
      <Banner 
        heading={homeData.headline.text}
        headingColored={homeData.headline_colored.text}
        description={homeData.subtext.text}
        buttonColored={homeData.button_1_label.text}
        buttonColoredLink={homeData.button_1.url}
        buttonPlain={homeData.button_2_label.text}
        buttonPlainLink={homeData.button_2.url}
      />
      <Home homeProps={homeData}/>
    </Layout>
  )
}

export default IndexPage

export const HomeQuery = graphql`
  query HomeQuery {
    prismicHomePage {
      data {
        headline {
          text
        }
        headline_colored {
          text
        }
        subtext {
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
        grid_section_heading {
          text
        }
        grid_section_small_text {
          text
        }
        grid_section_subtext {
          text
        }
        grid_cards {
          content {
            raw
          }
          icon {
            url
          }
          title {
            raw
          }
        }
      }
    }
  }
`