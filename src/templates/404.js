import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data }) => {
  if (!data) return null

  const notFound = data.prismicNotFound || {}
  const notFoundData = data.prismicNotFound.data || {}

  const { lang, type, url } = data.prismicNotFound || {}
  const alternateLanguages = notFound.alternate_languages || []
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
      <Seo title={notFoundData.seo_title.text} />
      <div class="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-52 md:grid md:place-items-center lg:px-8">
        <div class="max-w-max mx-auto">
          <div class="sm:flex">
            <p class="text-3.5xl font-extrabold text-emerald-600 sm:text-4.5xl mb-2">
              {notFoundData.heading_1.text}
            </p>
            <div class="sm:ml-6">
              <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-4.5xl mb-4">
                  {notFoundData.heading_2.text}
                </h1>
                <p class="mt-1 text-sm text-gray-500">
                  {notFoundData.description.text}
                </p>
              </div>
              <div class="mt-4 flex flex-col max-w-full mx-auto sm:max-w-md sm:flex-row space-x-3 sm:border-l sm:border-transparent sm:pl-6 sm:ml-0 -ml-3">
                <Link
                  to={notFoundData.button_1.url}
                  class="items-center px-7 py-3.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white text-center bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-0 ml-2.9 sm:mt-2 mt-0"
                >
                  {notFoundData.button_1_label.text}
                </Link>

                <Link
                  to={notFoundData.button_2.url}
                  class="items-center px-7 py-3.5 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 text-center hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
                >
                  {notFoundData.button_2_label.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const NotFoundQuery = graphql`
  query NotFoundQuery($lang: String) {
    prismicNotFound(lang: { eq: $lang }) {
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      data {
        seo_title {
          text
        }
        heading_1 {
          text
        }
        heading_2 {
          text
        }
        description {
          text
        }
        button_1_label {
          text
        }
        button_1 {
          url
        }
        button_2_label {
          text
        }
        button_2 {
          url
        }
      }
    }
    prismicHeader(lang: { eq: $lang }) {
      data {
        phone_number {
          text
        }
        contact_us {
          text
        }
        contact_us_link {
          url
        }
        client_reviews {
          text
        }
        client_reviews_link {
          url
        }
        free_trademark_search {
          text
        }
        free_trademark_search_link {
          url
        }
        service_title {
          text
        }
        branding_tools_title {
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
            alt
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
            alt
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
        about_us {
          text
        }
        about_link {
          url
        }
      }
    }
    prismicFooter(lang: { eq: $lang }) {
      data {
        application_title {
          text
        }
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
        company_title {
          text
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
        disputes_title {
          text
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
        registration_title {
          text
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
        newsletter_title {
          text
        }
        newsletter_desc {
          text
        }
        newsletter_placeholder {
          text
        }
        newsletter_button_label {
          text
        }
        footer_copyright {
          text
        }
      }
    }
  }
`
