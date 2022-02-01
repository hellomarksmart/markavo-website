import * as React from "react"
import { Link } from "gatsby"

import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid"

const Breadcrumb = ({ breadcrumbs_item }) => {
  return (
    <nav className="flex pt-10 max-w-[1440px] mx-auto" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link to="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {breadcrumbs_item?.map((item, i) => {
          return (
            <li key={i}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />

                {item?.page_current.url ? (
                  <Link
                    to={item?.page_current.url}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={item?.page_current ? "page" : undefined}
                  >
                    {item?.page_current_label.text}
                  </Link>
                ) : (
                  <div
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={item?.page_current ? "page" : undefined}
                  >
                    {item?.page_current_label.text}
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
