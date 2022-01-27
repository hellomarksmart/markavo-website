import * as React from "react"

const Statistics = ({
  heading,
  description,
  nameLeft,
  statsLeft,
  nameCenter,
  statsCenter,
  nameRight,
  statsRight,
}) => {
  return (
    <div className="bg-gray-50 pt-10 sm:pt-14">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-[36px] font-bold text-gray-900 md:max-w-3xl sm:max-w-md sm:mx-auto">
            {heading}
          </h2>
          <p className="mt-3 text-base sm:text-[20px] font-normal text-gray-500 sm:mt-4 sm:max-w-md sm:mx-auto md:max-w-3xl">{description}</p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-12">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-7 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-1 text-base sm:text-[18px] leading-6 font-medium text-gray-500">
                    {nameLeft}
                  </dt>
                  <dd className="order-1 mb-0 sm:mb-3 text-4xl sm:text-[48px] font-bold text-emerald-400">
                    {statsLeft}
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-7 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-1 text-base sm:text-[18px] leading-6 font-medium text-gray-500">
                    {nameCenter}
                  </dt>
                  <dd className="order-1 mb-0 sm:mb-3 text-4xl sm:text-[48px]text-[48px] font-bold text-emerald-400">
                    {statsCenter}
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-7 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-1 text-base sm:text-[18px] leading-6 font-medium text-gray-500">
                    {nameRight}
                  </dt>
                  <dd className="order-1 mb-0 sm:mb-3 text-4xl sm:text-[48px]-[48px] font-bold text-emerald-400">
                    {statsRight}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
