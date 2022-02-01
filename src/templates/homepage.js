import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Reusable Components/banner"
import Deploy from "../components/Reusable Components/deploy-section"
import Statistics from "../components/Reusable Components/statistics-section"
import Cta from "../components/Reusable Components/cta-section"
import PricingSection from "../components/Services & Price Services/pricing-section"

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
        stats_card={homeData.stats_content}
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
        stats_title {
          text
        }
        stats_heading {
          text
        }
        stats_description {
          text
        }
        stats_content {
          statistics {
            text
          }
          name {
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
