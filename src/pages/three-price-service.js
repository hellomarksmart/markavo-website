import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/banner"
import Deploy from "../components/deploy-section"
import ThreePriceServiceSection from "../components/three-price-section"
import Statistics from "../components/statistics-section"
import FAQs from "../components/faq-section"
import Cta from "../components/cta-section"

const ThreePriceService = props => {
  const ThreePriceServiceData = props.data.prismicThreePriceService.data

  return (
    <Layout>
      <Seo title="Three Price Service" />
      <Banner
        heading={ThreePriceServiceData.banner_heading.text}
        headingColored={ThreePriceServiceData.banner_heading_colored.text}
        description={ThreePriceServiceData.banner_description.text}
        buttonColored={ThreePriceServiceData.button_1_label.text}
        buttonColoredLink={ThreePriceServiceData.button_1.url}
        buttonPlain={ThreePriceServiceData.button_2_label.text}
        buttonPlainLink={ThreePriceServiceData.button_2.url}
      />
      <Deploy
        title={ThreePriceServiceData.grid_section_title.text}
        heading={ThreePriceServiceData.grid_section_heading.text}
        description={ThreePriceServiceData.grid_section_description.text}
        cards={ThreePriceServiceData.grid_cards}
      />
      <ThreePriceServiceSection
        title={ThreePriceServiceData.pricing_section_title.text}
        heading={ThreePriceServiceData.pricing_section_heading.text}
        description={ThreePriceServiceData.pricing_section_description.text}
        left_card_title={ThreePriceServiceData.left_card_title.text}
        left_card_currency={ThreePriceServiceData.left_card_currency.text}
        left_card_price={ThreePriceServiceData.left_card_price.text}
        left_card_period={ThreePriceServiceData.left_card_period.text}
        left_card_features={ThreePriceServiceData.left_card_features}
        left_card_button={ThreePriceServiceData.left_card_button.text}
        left_card_buttonLink={ThreePriceServiceData.left_card_buttonLink.url}
        center_card_subheading={
          ThreePriceServiceData.center_card_subheading.text
        }
        center_card_title={ThreePriceServiceData.center_card_title.text}
        center_card_currency={ThreePriceServiceData.center_card_currency.text}
        center_card_price={ThreePriceServiceData.center_card_price.text}
        center_card_period={ThreePriceServiceData.center_card_period.text}
        center_card_features={ThreePriceServiceData.center_card_features}
        center_card_button={ThreePriceServiceData.center_card_button.text}
        center_card_buttonLink={
          ThreePriceServiceData.center_card_buttonLink.url
        }
        right_card_title={ThreePriceServiceData.right_card_title.text}
        right_card_currency={ThreePriceServiceData.right_card_currency.text}
        right_card_price={ThreePriceServiceData.right_card_price.text}
        right_card_period={ThreePriceServiceData.right_card_period.text}
        right_card_features={ThreePriceServiceData.right_card_features}
        right_card_button={ThreePriceServiceData.right_card_button.text}
        right_card_buttonLink={ThreePriceServiceData.right_card_buttonLink.url}
      />
      <Statistics
        heading={ThreePriceServiceData.stats_heading.text}
        description={ThreePriceServiceData.stats_description.text}
        nameLeft={ThreePriceServiceData.name_left.text}
        statsLeft={ThreePriceServiceData.stats_left.text}
        nameCenter={ThreePriceServiceData.name_center.text}
        statsCenter={ThreePriceServiceData.stats_center.text}
        nameRight={ThreePriceServiceData.name_right.text}
        statsRight={ThreePriceServiceData.stats_right.text}
      />
      <FAQs
        heading={ThreePriceServiceData.faq_heading.text}
        faq_contents={ThreePriceServiceData.faq_contents}
      />
      <Cta
        heading={ThreePriceServiceData.cta_heading.text}
        headingSecond={ThreePriceServiceData.cta_heading_2.text}
        description={ThreePriceServiceData.cta_description.text}
        buttonPlain={ThreePriceServiceData.cta_button_label.text}
        buttonPlainLink={ThreePriceServiceData.cta_button.url}
      />
    </Layout>
  )
}

export default ThreePriceService

export const ThreePriceServiceQuery = graphql`
  query ThreePriceServiceQuery {
    prismicThreePriceService {
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
        grid_section_title {
          text
        }
        grid_section_heading {
          text
        }
        grid_section_description {
          text
        }
        grid_cards {
          content {
            text
          }
          title {
            text
          }
        }
        pricing_section_title {
          text
        }
        pricing_section_heading {
          text
        }
        pricing_section_description {
          text
        }
        left_card_title {
          text
        }
        left_card_currency {
          text
        }
        left_card_price {
          text
        }
        left_card_period {
          text
        }
        left_card_features {
          feature {
            text
          }
        }
        left_card_button {
          text
        }
        left_card_buttonLink {
          url
        }
        center_card_subheading {
          text
        }
        center_card_title {
          text
        }
        center_card_currency {
          text
        }
        center_card_price {
          text
        }
        center_card_period {
          text
        }
        center_card_features {
          feature {
            text
          }
        }
        center_card_button {
          text
        }
        center_card_buttonLink {
          url
        }
        right_card_title {
          text
        }
        right_card_currency {
          text
        }
        right_card_price {
          text
        }
        right_card_period {
          text
        }
        right_card_features {
          feature {
            text
          }
        }
        right_card_button {
          text
        }
        right_card_buttonLink {
          url
        }
        stats_heading {
          text
        }
        stats_description {
          text
        }
        stats_left {
          text
        }
        name_left {
          text
        }
        stats_center {
          text
        }
        name_center {
          text
        }
        stats_right {
          text
        }
        name_right {
          text
        }
        faq_heading {
          text
        }
        faq_contents {
          faq_question {
            text
          }
          faq_answer {
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
