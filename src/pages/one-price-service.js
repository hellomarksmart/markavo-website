import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Reusable Sections/banner"
import Deploy from "../components/Reusable Sections/deploy-section"
import OnePriceServiceSection from "../components/Reusable Sections/one-price-service-section"
import Statistics from "../components/Reusable Sections/statistics-section"
import FAQs from "../components/Reusable Sections/faq-section"
import Cta from "../components/Reusable Sections/cta-section"

const OnePriceService = props => {
  const onePriceServiceData = props.data.prismicOnePriceService.data

  return (
    <Layout>
      <Seo title="One Price Service" />
      <Banner
        heading={onePriceServiceData.banner_heading.text}
        headingColored={onePriceServiceData.banner_heading_colored.text}
        description={onePriceServiceData.banner_description.text}
        buttonColored={onePriceServiceData.button_1_label.text}
        buttonColoredLink={onePriceServiceData.button_1.url}
        buttonPlain={onePriceServiceData.button_2_label.text}
        buttonPlainLink={onePriceServiceData.button_2.url}
      />
      <Deploy
        title={onePriceServiceData.grid_section_title.text}
        heading={onePriceServiceData.grid_section_heading.text}
        description={onePriceServiceData.grid_section_description.text}
        cards={onePriceServiceData.grid_cards}
      />
      <OnePriceServiceSection
        heading={onePriceServiceData.pricing_section_heading.text}
        description={onePriceServiceData.pricing_section_description.text}
        card_heading={onePriceServiceData.card_heading.text}
        card_description={onePriceServiceData.card_description.text}
        card_subheading={onePriceServiceData.card_subheading.text}
        card_features={onePriceServiceData.card_features}
        right_card_subheading={onePriceServiceData.right_card_subheading.text}
        card_currency={onePriceServiceData.card_currency.text}
        card_price={onePriceServiceData.card_price.text}
        card_currency_text={onePriceServiceData.card_currency_text.text}
        card_link_label={onePriceServiceData.card_link_label.text}
        card_link={onePriceServiceData.card_link.text}
        card_buuton_label={onePriceServiceData.card_buuton_label.text}
        card_button_link={onePriceServiceData.card_button_link.text}
        card_sample={onePriceServiceData.card_sample.text}
        card_sample_link={onePriceServiceData.card_sample_link.text}
        card_sample_size={onePriceServiceData.card_sample_size.text}
      />
      <Statistics
        heading={onePriceServiceData.stats_heading.text}
        description={onePriceServiceData.stats_description.text}
        nameLeft={onePriceServiceData.name_left.text}
        statsLeft={onePriceServiceData.stats_left.text}
        nameCenter={onePriceServiceData.name_center.text}
        statsCenter={onePriceServiceData.stats_center.text}
        nameRight={onePriceServiceData.name_right.text}
        statsRight={onePriceServiceData.stats_right.text}
      />
      <FAQs
        heading={onePriceServiceData.faq_heading.text}
        faq_contents={onePriceServiceData.faq_contents}
      />
      <Cta
        heading={onePriceServiceData.cta_heading.text}
        headingSecond={onePriceServiceData.cta_heading_2.text}
        description={onePriceServiceData.cta_description.text}
        buttonPlain={onePriceServiceData.cta_button_label.text}
        buttonPlainLink={onePriceServiceData.cta_button.url}
      />
    </Layout>
  )
}

export default OnePriceService

export const OnePriceServiceQuery = graphql`
  query OnePriceServiceQuery {
    prismicOnePriceService {
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
        pricing_section_heading {
          text
        }
        pricing_section_description {
          text
        }
        card_heading {
          text
        }
        card_description {
          text
        }
        card_subheading {
          text
        }
        card_features {
          feature {
            text
          }
        }
        right_card_subheading {
          text
        }
        card_currency {
          text
        }
        card_price {
          text
        }
        card_currency_text {
          text
        }
        card_link_label {
          text
        }
        card_link {
          url
        }
        card_buuton_label {
          text
        }
        card_button_link {
          url
        }
        card_sample {
          text
        }
        card_sample_link {
          url
        }
        card_sample_size {
          text
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
