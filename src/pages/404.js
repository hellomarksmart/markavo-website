import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = props => {
  const notFoundData = props.data.prismicNotFound.data
  return (
    <Layout>
      <Seo title="404: Not found" />
      <div class="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div class="max-w-max mx-auto">
          <div class="sm:flex">
            <p class="text-4xl font-extrabold text-emerald-600 sm:text-5xl">
              {notFoundData.heading_1.text}
            </p>
            <div class="sm:ml-6">
              <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  {notFoundData.heading_2.text}
                </h1>
                <p class="mt-1 text-base text-gray-500">
                  {notFoundData.description.text}
                </p>
              </div>
              <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  to={notFoundData.button_1.url}
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {notFoundData.button_1_label.text}
                </Link>
                <Link
                  to={notFoundData.button_2.url}
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
