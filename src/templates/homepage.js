import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/banner"
import Deploy from "../components/deploy-section"
import Statistics from "../components/statistics-section"
import Cta from "../components/cta-section"
import PricingSection from "../components/pricing-section"

const HomepageTemplate = ({ data }) => {
  if (!data) return null

  const homepage = data.prismicHomePage || {}
  const homeData = data.prismicHomePage.data || {}

  const { lang, type, url } = data.prismicHomePage || {}
  const alternateLanguages = homepage.alternate_languages || []
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
      <Seo title="Home" />
      <Banner
        heading={homeData.banner_heading.text}
        headingColored={homeData.banner_heading_colored.text}
        description={homeData.banner_description.text}
        buttonColored={homeData.button_1_label.text}
        buttonColoredLink={homeData.button_1.url}
        buttonPlain={homeData.button_2_label.text}
        buttonPlainLink={homeData.button_2.url}
      />
      <Deploy
        title={homeData.grid_section_title.text}
        heading={homeData.grid_section_heading.text}
        description={homeData.grid_section_description.text}
        cards={homeData.grid_cards}
      />
      {homeData.body.length !== 0 ? (
        <PricingSection pricingBody={homeData.body} />
      ) : (
        ""
      )}
      <Statistics
        title={homeData.stats_title.text}
        heading={homeData.stats_heading.text}
        description={homeData.stats_description.text}
        nameLeft={homeData.name_left.text}
        statsLeft={homeData.stats_left.text}
        nameCenter={homeData.name_center.text}
        statsCenter={homeData.stats_center.text}
        nameRight={homeData.name_right.text}
        statsRight={homeData.stats_right.text}
      />
      <Cta
        heading={homeData.cta_heading.text}
        headingSecond={homeData.cta_heading_2.text}
        description={homeData.cta_description.text}
        buttonPlain={homeData.cta_button_label.text}
        buttonPlainLink={homeData.cta_button.url}
      />
    </Layout>
  )
}

export default HomepageTemplate

export const query = graphql`
  query HomeQuery($lang: String) {
    prismicHomePage(lang: { eq: $lang }) {
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
          ... on PrismicHomePageDataBodyPricingTable {
            primary {
              eyebrow_headline {
                text
              }
              title {
                text
              }
              description {
                text
              }
            }
            items {
              plan_title {
                text
              }
              currency {
                text
              }
              frequency {
                text
              }
              price_option {
                text
              }
              features {
                richText
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
          icon {
            url
          }
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
        stats_title {
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
