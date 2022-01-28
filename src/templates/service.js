import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/banner"
import Deploy from "../components/deploy-section"
import Statistics from "../components/statistics-section"
import FAQs from "../components/faq-section"
import Cta from "../components/cta-section"
import PricingSection from "../components/pricing-section"

const Service = ({ data }) => {
  if (!data) return null

  const singleService = data.prismicServiceSinglePage || {}
  const singleServiceData = data.prismicServiceSinglePage.data || {}

  const { lang, type, url } = data.prismicServiceSinglePage || {}
  const alternateLanguages = singleService.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  console.log(singleService)

  return (
    <Layout activeDoc={activeDoc}>
      <Seo title="Service" />
      <Banner
        heading={singleServiceData.banner_heading.text}
        headingColored={singleServiceData.banner_heading_colored.text}
        description={singleServiceData.banner_description.text}
        buttonColored={singleServiceData.button_1_label.text}
        buttonColoredLink={singleServiceData.button_1.url}
        buttonPlain={singleServiceData.button_2_label.text}
        buttonPlainLink={singleServiceData.button_2.url}
      />
      <Deploy
        title={singleServiceData.grid_section_title.text}
        heading={singleServiceData.grid_section_heading.text}
        description={singleServiceData.grid_section_description.text}
        cards={singleServiceData.grid_cards}
      />
      <PricingSection pricingBody={singleServiceData.body} />
      <Statistics
        heading={singleServiceData.stats_heading.text}
        description={singleServiceData.stats_description.text}
        nameLeft={singleServiceData.name_left.text}
        statsLeft={singleServiceData.stats_left.text}
        nameCenter={singleServiceData.name_center.text}
        statsCenter={singleServiceData.stats_center.text}
        nameRight={singleServiceData.name_right.text}
        statsRight={singleServiceData.stats_right.text}
      />
      <FAQs
        heading={singleServiceData.faq_heading.text}
        faq_contents={singleServiceData.faq_contents}
      />
      <Cta
        heading={singleServiceData.cta_heading.text}
        headingSecond={singleServiceData.cta_heading_2.text}
        description={singleServiceData.cta_description.text}
        buttonPlain={singleServiceData.cta_button_label.text}
        buttonPlainLink={singleServiceData.cta_button.url}
      />
    </Layout>
  )
}

export default Service

export const ServiceSingleQuery = graphql`
  query ServiceSingleQuery($lang: String, $id: String) {
    prismicServiceSinglePage(id: { eq: $id }, lang: { eq: $lang }) {
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      data {
        body {
          ... on PrismicServiceSinglePageDataBodyPricingTable {
            id
            primary {
              eyebrow_headline {
                text
              }
              title {
                text
              }
              description {
                richText
                text
              }
            }
            items {
              plan_title {
                text
              }
              plan_description {
                richText
              }
              headline {
                text
              }
              currency {
                text
              }
              price_option {
                text
              }
              frequency {
                text
              }
              features {
                richText
              }
              bottomline {
                text
              }
              cta_bottom_text {
                text
              }
              call_to_action_text {
                text
              }
              call_to_action {
                url
              }
            }
          }
        }
        banner_heading {
          text
        }
        banner_heading_colored {
          text
        }
        banner_description {
          text
        }
        button_1 {
          url
        }
        button_1_label {
          text
        }
        button_2 {
          url
        }
        button_2_label {
          text
        }
        grid_section_heading {
          text
        }
        grid_section_title {
          text
        }
        grid_section_description {
          text
        }
        grid_cards {
          content {
            richText
          }
          icon {
            url
          }
          title {
            text
          }
        }
        stats_heading {
          text
        }
        stats_description {
          richText
        }
        stats_left {
          text
        }
        stats_right {
          text
        }
        stats_center {
          text
        }
        name_right {
          text
        }
        name_left {
          text
        }
        name_center {
          text
        }
        faq_heading {
          text
        }
        faq_contents {
          faq_answer {
            text
          }
          faq_question {
            richText
          }
        }
        cta_heading_2 {
          text
        }
        cta_heading {
          text
        }
        cta_description {
          richText
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
