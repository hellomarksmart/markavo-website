import * as React from "react"
import { Link } from "gatsby"
import { CheckIcon } from "@heroicons/react/outline"

const ThreePriceServiceSection = ({
  title,
  heading,
  description,
  left_card_title,
  left_card_currency,
  left_card_price,
  left_card_period,
  left_card_features,
  left_card_button,
  left_card_buttonLink,
  center_card_subheading,
  center_card_title,
  center_card_currency,
  center_card_price,
  center_card_period,
  center_card_features,
  center_card_button,
  center_card_buttonLink,
  right_card_title,
  right_card_currency,
  right_card_price,
  right_card_period,
  right_card_features,
  right_card_button,
  right_card_buttonLink,
}) => {
  return (
    <div className="bg-emerald-900">
      <div className="max-w-[90%] mx-auto pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-[18px] leading-6 font-semibold text-emerald-300 uppercase tracking-wider">
            {title}
          </h2>
          <p className="text-3xl font-bold text-white sm:text-4xl sm:max-w-md md:max-w-3xl lg:max-w-4xl lg:text-[48px] mx-auto">
            {heading}
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-base text-emerald-300 sm:mt-5 sm:text-[20px] md:text-[24px] md:max-w-[46rem] sm:max-w-md">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-16 bg-emerald-900 pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-emerald-900 lg:h-2/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-[24px] font-medium text-gray-900"
                          id="tier-hobby"
                        >
                          {left_card_title}
                        </h3>
                        <div className="mt-4 flex items-center justify-center ">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-[36px] font-normal">
                              {left_card_currency}
                            </span>
                            <span className="font-bold text-[60px]">
                              {left_card_price}
                            </span>
                          </span>
                          <span className="text-xl font-normal text-gray-500">
                            {left_card_period}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        {left_card_features?.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-[16px] font-medium text-gray-500">
                              {item?.feature.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          {left_card_buttonLink ? (
                            <Link
                              key={left_card_button}
                              to={left_card_buttonLink}
                              className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-[16px] font-medium text-emerald-600 hover:bg-gray-50"
                              aria-describedby="tier-hobby"
                            >
                              {left_card_button}
                            </Link>
                          ) : (
                            <div className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-emerald-600 hover:bg-gray-50">
                              {left_card_button}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-emerald-600"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-emerald-600 px-4 py-1 text-[14px] font-semibold tracking-wider uppercase text-white">
                        {center_card_subheading}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <h3
                        className="text-center text-[30px] font-semibold text-gray-900 sm:-mx-6"
                        id="tier-growth"
                      >
                        {center_card_title}
                      </h3>
                      <div className="mt-4 flex items-center justify-center ">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-[36px] font-medium">
                            {center_card_currency}
                          </span>
                          <span className="font-bold text-[60px]">
                            {center_card_price}
                          </span>
                        </span>
                        <span className="text-[24px] font-normal text-gray-500">
                          {center_card_period}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                    <ul className="space-y-4">
                      {center_card_features?.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="flex-shrink-0 h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-[16px] font-medium text-gray-500">
                            {item?.feature.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        {center_card_buttonLink ? (
                          <Link
                            key={center_card_button}
                            to={center_card_buttonLink}
                            className="block w-full text-center rounded-lg border border-transparent bg-emerald-600 md:py-[16px] md:px-[40px] text-[20px] leading-6 font-medium text-white hover:bg-emerald-700"
                            aria-describedby="tier-growth"
                          >
                            {center_card_button}
                          </Link>
                        ) : (
                          <div className="block w-full text-center rounded-lg border border-transparent bg-emerald-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-emerald-700">
                            {center_card_button}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-[24px] font-medium text-gray-900"
                          id="tier-scale"
                        >
                          {right_card_title}
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-[36px] font-medium">
                              {right_card_currency}
                            </span>
                            <span className="font-bold text-[60px]">
                              {right_card_price}
                            </span>
                          </span>
                          <span className="text-xl font-normal text-gray-500">
                            {right_card_period}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        {right_card_features?.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-[16px] font-medium text-gray-500">
                              {item?.feature.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          {right_card_buttonLink ? (
                            <Link
                              key={right_card_button}
                              to={right_card_buttonLink}
                              className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-[16px] font-medium text-emerald-600 hover:bg-gray-50"
                              aria-describedby="tier-scale"
                            >
                              {right_card_button}
                            </Link>
                          ) : (
                            <div className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-emerald-600 hover:bg-gray-50">
                              {right_card_button}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreePriceServiceSection
