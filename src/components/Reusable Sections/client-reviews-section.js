import * as React from "react"
import { StarIcon } from "@heroicons/react/solid"

const reviews = [
  {
    id: 1,
    author: "Anonymous",
    rating: 5,
    title: "❝Very Helpful, answers all my Questions?❞",
  },
  {
    id: 2,
    author: "STRÜB, I",
    rating: 5,
    title:
      "❝They say what they do and do what they say, I never know this stuff could be so easy. Thanks to Legally!❞",
  },
  {
    id: 3,
    author: "Amy O",
    rating: 5,
    title:
      "❝I have had a great experience with Legallyce and the attorney who is handling my trademark. They are so holoful professional and go the extra mile to make sure that you get your trademark registered correctly. I am so grateful that I decided to work with this company to get my trademark registered.❞",
  },
  {
    id: 4,
    author: "Tom",
    rating: 5,
    title: "❝Very professional and easy to work with❞",
  },
  {
    id: 5,
    author: "P. M",
    rating: 4,
    title:
      "❝Mr. Javier Gómez, Esq. Trademark Attorney. I thank you so very much for your prompt attention and professional cooperation in handling my trademark renewal process Much respect to you and your professionalism P. Morris❞",
  },
]

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
