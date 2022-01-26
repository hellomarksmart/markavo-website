import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = props => {
  const notFoundData = props.data.prismicNotFound.data
  return (
    <Layout>
      <Seo title="404: Not found" />
      <div class="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-52 md:grid md:place-items-center lg:px-8">
        <div class="max-w-max mx-auto">
          <div class="sm:flex">
            <p class="text-4xl font-extrabold text-emerald-600 sm:text-[48px] mb-2">
              {notFoundData.heading_1.text}
            </p>
            <div class="sm:ml-6">
              <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-[48px] mb-4">
                  {notFoundData.heading_2.text}
                </h1>
                <p class="mt-1 text-[16px] text-gray-500">
                  {notFoundData.description.text}
                </p>
              </div>
              <div class="mt-4 flex flex-col max-w-full mx-auto sm:max-w-md sm:flex-row space-x-3 sm:border-l sm:border-transparent sm:pl-6 sm:ml-0">
                <Link
                  to={notFoundData.button_1.url}
                  class="items-center px-[32px] py-[16px] border border-transparent text-[18px] font-medium rounded-md shadow-sm text-white text-center bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-0 ml-[13px] sm:mt-[9px] mt-0"
                >
                  {notFoundData.button_1_label.text}
                </Link>

                <Link
                  to={notFoundData.button_2.url}
                  class="items-center sm:px-[32px] py-[16px] px-[32px] border border-transparent text-[18px] font-medium rounded-md text-emerald-700 bg-emerald-100 text-center hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
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
  query NotFoundQuery {
    prismicNotFound {
      data {
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
  }
`
