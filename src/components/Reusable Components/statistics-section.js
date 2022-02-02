import * as React from "react"

const Statistics = ({ title, heading, description, stats_card }) => {
  return (
    <div className="bg-gray-50 pt-10 sm:pt-14">
      <div className="max-w-default mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-wider text-emerald-500 uppercase mb-2">
            {title}
          </h2>
          <h2 className="text-3xl sm:text-3.5xl font-bold text-gray-900 md:max-w-3xl sm:max-w-md sm:mx-auto">
            {heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg font-normal text-gray-500 sm:mt-4 sm:max-w-md sm:mx-auto md:max-w-3xl">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-12">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-default mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                {stats_card?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col border-b border-gray-100 p-7 text-center sm:border-0 sm:border-r"
                    >
                      <dt className="order-2 mt-1 text-base sm:text-base leading-6 font-medium text-gray-500">
                        {item?.name.text}
                      </dt>
                      <dd className="order-1 mb-0 sm:mb-3 text-4xl sm:text-4.5xl font-bold text-emerald-400">
                        {item?.statistics.text}
                      </dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
