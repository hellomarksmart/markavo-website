import React, { useState, useEffect } from "react"
import { StarIcon } from "@heroicons/react/solid"
import Pagination from "../Reusable Components/pagination-section"

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
    <div className="bg-white">
      <div className="ml-0 pb-0 px-4 sm:pb-0">
        <div
          className="max-w-default mx-auto px-4 sm:px-6 lg:px-8 mt-0 pb-10 border-b border-gray-200 divide-y divide-gray-200"
          itemscope
          itemtype="https://schema.org/Review"
        >
          {dataReviews?.slice(startIndex, endIndex).map((item, i) => {
            return (
              <div key={i} className="sm:py-6 py-5">
                <div className="mt-6 flex items-start text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 sm-flex-col sm:items-start xl:col-span-3">
                  <p
                    itemprop="author"
                    itemscope
                    itemtype="https://schema.org/Person"
                  >
                    <span
                      className="font-bold text-gray-900 text-xs sm:mb-5.5 mb-0 pl-1"
                      itemprop="name"
                    >
                      {/* {item?.reviewer_name.text} */}
                      Anonymous
                    </span>
                  </p>
                  <div
                    itemprop="reviewRating"
                    itemscope
                    itemtype="https://schema.org/Rating"
                  >
                    <div
                      className="flex items-center pl-2"
                      itemprop="ratingValue"
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
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
                  <div className="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
                    <h3
                      className="font-medium text-xs text-gray-900 mb-0"
                      itemprop="reviewBody"
                    >
                      {/* {item?.reviewer_message.text} */}
                      Very Helpful, answers all my Questions.
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
          setCurrentPage={setCurrentPage}
        />
      ) : (
        ""
      )}
    </div>
  )
}

export default ClientReviewsSection
