import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Reusable Sections/banner"
import Deploy from "../components/Reusable Sections/deploy-section"
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
      <div className="relative bg-white pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-base font-semibold font-sans tracking-wider text-emerald-500 uppercase">
              {homeData.grid_section_small_text.text}
            </h2>
            <p className="mt-2 text-3xl font-extrabold font-sans text-gray-900 tracking-tight sm:text-4xl">
              {homeData.grid_section_heading.text}
            </p>
            <p className="mt-5 max-w-prose mx-auto font-sans text-xl text-gray-500">
              {homeData.grid_section_subtext.text}
            </p>
          </div>

          <div className="mt-12 bg-white">
            <div className="pt-6">
              <div className="bg-white grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {homeData.grid_cards?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flow-root bg-gray-50 rounded-lg px-6 pb-8"
                    >
                      {item?.icon.url ? (
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg">
                            {item?.icon.url}
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {item?.title.text}
                      </h3>
                      <p className="mt-5 text-base font-sans text-gray-500">
                        {item?.content.text}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home homeProps={homeData} />
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
            text
          }
          icon {
            url
          }
          title {
            text
          }
        }
      }
    }
  }
`
