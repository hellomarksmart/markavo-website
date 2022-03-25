import React, { useState, useEffect } from "react"
import { StarIcon } from "@heroicons/react/solid"
import Pagination from "../Reusable Components/pagination-section"
import { ArticleJsonLd } from 'gatsby-plugin-next-seo';

import { Helmet } from "react-helmet";
import { StructuredData } from "../../components/structured-data"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const ClientReviewsSection = ({ reviews }) => {
  const [dataReviews] = useState(reviews)
  let [responseLength, setResponseLength] = useState("")

  useEffect(() => {
    setResponseLength(reviews.length)
  }, [reviews.length])

  const pages = Math.round(responseLength / 50)
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = currentPage * 50 - 50
  const endIndex = startIndex + 50

  return (
    <>
      <Helmet>
        <StructuredData>
          {{
            "@context": "https://schema.org/",
            "review": [{
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1"
              },
              "itemReviewed": {
                "@type": "Organization",
                "name": "Markavo",
                "images": "https://markavo.com/markavo-reviews/markavo-reviews"
              },
              "publisher": {
                "@type": "Organization",
                "name": "markavowebsitestaging.gatsbyjs.io",
                "sameAs": "https://markavo.com/markavo-reviews"
              },
              "datePublished": "2022-03-22 14:08:00",
              "author": {
                "@type": "Person",
                "name": "Name"
              },
              "reviewBody": "This is not inside a loop."
            }]
          }}
        </StructuredData>
      </Helmet>

      <div className="bg-white">
        <div className="ml-0 pb-0 px-4 sm:pb-0">
          <div
            className="max-w-default mx-auto px-4 sm:px-6 lg:px-8 mt-0 pb-10 border-b border-gray-200 divide-y divide-gray-200"
          >
            {dataReviews?.slice(startIndex, endIndex).map((item, i) => {
              return (
                <div key={i} className="sm:py-6 py-5">
                  <div className="mt-6 flex items-start text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 sm-flex-col sm:items-start xl:col-span-3">
                    <p
                    >
                      <span
                        className="font-bold text-gray-900 text-xs sm:mb-5.5 mb-0 pl-1"
                      >
                        {item?.reviewer_name.text}
                      </span>
                    </p>
                    <div
                    >
                      <div
                        className="flex items-center pl-2"
                      >
                        {[0, 1, 2, 3, 4].map(reviewer_rate => (
                          <StarIcon
                            key={reviewer_rate}
                            className={classNames(
                              item?.reviewer_rate > reviewer_rate
                                ? "text-yellow-400"
                                : "text-gray-200",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
                    <div className="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
                      <h3
                        className="font-medium text-xs text-gray-900 mb-0"
                      >
                        {item?.reviewer_message.text}
                      </h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {responseLength > 49 ? (
          <Pagination
            currentPage={currentPage}
            pages={pages}
            totalItems={responseLength}
            setCurrentPage={setCurrentPage} />
        ) : (
          ""
        )}
      </div></>
  )
}

export default ClientReviewsSection
