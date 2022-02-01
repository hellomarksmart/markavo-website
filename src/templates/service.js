import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Reusable Components/banner"
import Deploy from "../components/Reusable Components/deploy-section"
import Statistics from "../components/Reusable Components/statistics-section"
import FAQs from "../components/Reusable Components/faq-section"
import Cta from "../components/Reusable Components/cta-section"
import PricingSection from "../components/Services & Price Services/pricing-section"

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

  return (
    <Layout
      activeDoc={activeDoc}
      headerBody={data.prismicHeader}
      footerBody={data.prismicFooter}
    >
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
        title={singleServiceData.stats_title.text}
        heading={singleServiceData.stats_heading.text}
        description={singleServiceData.stats_description.text}
        stats_card={singleServiceData.stats_content}
      />
      <FAQs
        title={singleServiceData.faq_title.text}
        heading={singleServiceData.faq_heading.text}
        description={singleServiceData.faq_description.text}
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
              discounted_pill_text {
                text
              }
              discount_description {
                richText
              }
              discount_cta_link {
                url
              }
              discount_cta_label {
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
              policy_text {
                text
              }
              policy_link {
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
            text
          }
          icon {
            url
          }
          title {
            text
          }
        }
        stats_title {
          text
        }
        stats_heading {
          text
        }
        stats_description {
          richText
        }
        stats_content {
          statistics {
            text
          }
          name {
            text
          }
        }
        faq_title {
          text
        }
        faq_heading {
          text
        }
        faq_description {
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
