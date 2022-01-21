import * as React from "react"
import { Link } from "gatsby"
import { CheckIcon } from "@heroicons/react/solid"

const TwoPriceServiceSection = ({
  title,
  heading,
  description,
  first_card_features,
  first_card_title,
  first_card_currency,
  first_card_price,
  first_card_period,
  first_card_desc,
  first_card_button,
  first_card_button_link,
  second_card_features,
  second_card_title,
  second_card_currency,
  second_card_price,
  second_card_period,
  second_card_desc,
  second_card_button,
  second_card_button_link,
  discount_subheading,
  discount_description,
  discount_revenue,
  discount_button,
  discount_link,
}) => {
  return (
    <div className="bg-emerald-700">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-emerald-100 uppercase tracking-wider">
              {title}
            </h2>
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {heading}
            </p>
            <p className="text-xl text-emerald-100">{description}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-emerald-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-emerald-700" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <h3
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-emerald-100 text-emerald-600"
                      id="tier-standard"
                    >
                      {first_card_title}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                    {first_card_currency}
                    {first_card_price}
                    <span className="ml-1 text-2xl font-medium text-gray-500">
                      {first_card_period}
                    </span>
                  </div>
                  <p className="mt-5 text-lg text-gray-500">
                    {first_card_desc}
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    {first_card_features?.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon
                            className="h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          {item?.feature.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-md shadow">
                    {first_card_button_link ? (
                      <Link
                        key={first_card_button}
                        to={first_card_button_link}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-900"
                        aria-describedby="tier-standard"
                      >
                        {first_card_button}
                      </Link>
                    ) : (
                      <div
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-900"
                        aria-describedby="tier-standard"
                      >
                        {first_card_button}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <h3
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-emerald-100 text-emerald-600"
                      id="tier-standard"
                    >
                      {second_card_title}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                    {second_card_currency}
                    {second_card_price}
                    <span className="ml-1 text-2xl font-medium text-gray-500">
                      {second_card_period}
                    </span>
                  </div>
                  <p className="mt-5 text-lg text-gray-500">
                    {second_card_desc}
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    {second_card_features?.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon
                            className="h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          {item?.feature.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-md shadow">
                    {first_card_button_link ? (
                      <Link
                        key={second_card_button}
                        to={second_card_button_link}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-900"
                        aria-describedby="tier-standard"
                      >
                        {second_card_button}
                      </Link>
                    ) : (
                      <div
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-900"
                        aria-describedby="tier-standard"
                      >
                        {second_card_button}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-emerald-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-emerald-800">
                    {discount_subheading}
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-600">
                  {discount_description}{" "}
                  <span className="font-semibold text-gray-900">
                    ${discount_revenue}
                  </span>
                  .
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                {discount_link ? (
                  <Link
                    key={discount_button}
                    to={discount_link}
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-900 bg-white hover:bg-emerald-50"
                  >
                    {discount_button}
                  </Link>
                ) : (
                  <div className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-900 bg-white hover:bg-emerald-50">
                    {discount_button}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoPriceServiceSection
