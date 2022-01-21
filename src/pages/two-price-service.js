import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Reusable Sections/banner"
import Deploy from "../components/Reusable Sections/deploy-section"
import TwoPriceServiceSection from "../components/Reusable Sections/two-price-service-section"
import Statistics from "../components/Reusable Sections/statistics-section"
import FAQs from "../components/Reusable Sections/faq-section"
import Cta from "../components/Reusable Sections/cta-section"

const TwoPriceService = props => {
  const twoPriceServiceData = props.data.prismicTwoPriceService.data

  return (
    <Layout>
      <Seo title="Two Price Service" />
      <Banner
        heading={twoPriceServiceData.banner_heading.text}
        headingColored={twoPriceServiceData.banner_heading_colored.text}
        description={twoPriceServiceData.banner_description.text}
        buttonColored={twoPriceServiceData.button_1_label.text}
        buttonColoredLink={twoPriceServiceData.button_1.url}
        buttonPlain={twoPriceServiceData.button_2_label.text}
        buttonPlainLink={twoPriceServiceData.button_2.url}
      />
      <Deploy
        title={twoPriceServiceData.grid_section_title.text}
        heading={twoPriceServiceData.grid_section_heading.text}
        description={twoPriceServiceData.grid_section_description.text}
        cards={twoPriceServiceData.grid_cards}
      />
      <TwoPriceServiceSection
        title={twoPriceServiceData.pricing_section_title.text}
        heading={twoPriceServiceData.pricing_section_heading.text}
        description={twoPriceServiceData.pricing_section_description.text}
        first_card_title={twoPriceServiceData.first_card_title.text}
        first_card_currency={twoPriceServiceData.first_card_currency.text}
        first_card_price={twoPriceServiceData.first_card_price.text}
        first_card_period={twoPriceServiceData.first_card_period.text}
        first_card_desc={twoPriceServiceData.first_card_desc.text}
        first_card_features={twoPriceServiceData.first_card_features}
        first_card_button={twoPriceServiceData.first_card_button.text}
        first_card_button_link={twoPriceServiceData.first_card_button_link.text}
        second_card_title={twoPriceServiceData.second_card_title.text}
        second_card_currency={twoPriceServiceData.second_card_currency.text}
        second_card_price={twoPriceServiceData.second_card_price.text}
        second_card_period={twoPriceServiceData.second_card_period.text}
        second_card_desc={twoPriceServiceData.second_card_desc.text}
        second_card_features={twoPriceServiceData.second_card_features}
        second_card_button={twoPriceServiceData.second_card_button.text}
        second_card_button_link={
          twoPriceServiceData.second_card_button_link.text
        }
        discount_subheading={twoPriceServiceData.discount_subheading.text}
        discount_description={twoPriceServiceData.discount_description.text}
        discount_revenue={twoPriceServiceData.discount_revenue.text}
        discount_button={twoPriceServiceData.discount_button.text}
        discount_link={twoPriceServiceData.discount_link.url}
      />
      <Statistics
        heading={twoPriceServiceData.stats_heading.text}
        description={twoPriceServiceData.stats_description.text}
        nameLeft={twoPriceServiceData.name_left.text}
        statsLeft={twoPriceServiceData.stats_left.text}
        nameCenter={twoPriceServiceData.name_center.text}
        statsCenter={twoPriceServiceData.stats_center.text}
        nameRight={twoPriceServiceData.name_right.text}
        statsRight={twoPriceServiceData.stats_right.text}
      />
      <FAQs
        heading={twoPriceServiceData.faq_heading.text}
        faq_contents={twoPriceServiceData.faq_contents}
      />
      <Cta
        heading={twoPriceServiceData.cta_heading.text}
        headingSecond={twoPriceServiceData.cta_heading_2.text}
        description={twoPriceServiceData.cta_description.text}
        buttonPlain={twoPriceServiceData.cta_button_label.text}
        buttonPlainLink={twoPriceServiceData.cta_button.url}
      />
    </Layout>
  )
}

export default TwoPriceService

export const TwoPriceServiceQuery = graphql`
  query TwoPriceServiceQuery {
    prismicTwoPriceService {
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
          icon {
            url
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
        first_card_title {
          text
        }
        first_card_currency {
          text
        }
        first_card_price {
          text
        }
        first_card_period {
          text
        }
        first_card_desc {
          text
        }
        first_card_features {
          feature {
            text
          }
        }
        first_card_button {
          text
        }
        first_card_button_link {
          url
        }
        second_card_title {
          text
        }
        second_card_currency {
          text
        }
        second_card_price {
          text
        }
        second_card_period {
          text
        }
        second_card_desc {
          text
        }
        second_card_features {
          feature {
            text
          }
        }
        second_card_button {
          text
        }
        second_card_button_link {
          url
        }
        discount_subheading {
          text
        }
        discount_description {
          text
        }
        discount_revenue {
          text
        }
        discount_button {
          text
        }
        discount_link {
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
