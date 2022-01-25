import * as React from "react"
import { StarIcon } from "@heroicons/react/solid"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const ClientReviewsSection = ({ reviews }) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 pb-10 border-t border-b border-gray-200 divide-y divide-gray-200 space-y-10">
          {reviews?.map((item, i) => {
            return (
              <div key={i} className="pt-10">
                <div className="mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:items-start xl:col-span-3">
                  <p className="font-bold text-gray-900">
                    {item?.reviewer_name.text}
                  </p>
                  <div className="flex items-center pl-2">
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
                    <h3 className="font-medium text-sm text-gray-900 mb-0">
                      {item?.reviewer_message.text}
                    </h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ClientReviewsSection
