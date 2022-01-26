import React, { useState, useEffect } from "react"
import { StarIcon } from "@heroicons/react/solid"
import Pagination from "../components/pagination-section"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const ClientReviewsSection = ({ reviews }) => {
  const [dataReviews, setDataReviews] = useState(reviews)
  let [responseLength, setResponseLength] = useState("")

  useEffect(() => {
    setResponseLength(reviews.length)
  }, [])

  const pages = Math.round(responseLength / 10)
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = currentPage * 10 - 10
  const endIndex = startIndex + 10

  console.log(responseLength)

  return (
    <div className="bg-white">
      <div className="lg:max-w-5xl md:max-w-2xl sm:max-w-[90%] max-w-[full] ml-0 pb-0 px-4 sm:pb-0 sm:px-6 lg:px-8">
        <div className="mt-0 pb-10 border-b border-gray-200 divide-y divide-gray-200 space-y-10">
          {dataReviews?.slice(startIndex, endIndex).map((item, i) => {
            return (
              <div key={i} className="sm:py-10 py-5">
                <div className="mt-6 flex items-start text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 sm-flex-col sm:items-start xl:col-span-3">
                  <p className="font-bold font-sans text-gray-900 sm:mb-[1.45rem] mb-0 pl-1">
                    {item?.reviewer_name.text}
                  </p>
                  <div className="flex items-center sm:pl-2 pl-0">
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
                <div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
                  <div className="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
                    <h3 className="font-medium text-sm text-gray-900 mb-0 pl-1">
                      {item?.reviewer_message.text}
                    </h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {responseLength > 3 ? (
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
