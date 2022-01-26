import * as React from "react"

import { Link } from "gatsby"
import { CheckCircleIcon } from "@heroicons/react/solid"

const OnePriceServiceSection = ({
  heading,
  description,
  card_heading,
  card_description,
  card_subheading,
  card_features,
  right_card_subheading,
  card_currency,
  card_price,
  card_currency_text,
  card_link_label,
  card_link,
  card_buuton_label,
  card_button_link,
  card_sample,
  card_sample_link,
  card_sample_size,
}) => {
  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="mt-4 text-xl text-gray-600">{description}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  {card_heading}
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  {card_description}
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-emerald-600">
                      {card_subheading}
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {card_features?.map((item, i) => (
                      <li key={i} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          {item?.feature.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-emerald-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">
                  {right_card_subheading}
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>
                    {card_currency}
                    {card_price}
                  </span>
                  <span className="ml-3 text-xl font-medium text-gray-500">
                    {card_currency_text}
                  </span>
                </div>
                <p className="mt-4 text-sm">
                  {card_link ? (
                    <Link
                      key={card_link_label}
                      to={card_link}
                      className="font-medium text-emerald-500 underline"
                    >
                      {card_link_label}
                    </Link>
                  ) : (
                    <div className="font-medium text-emerald-500 underline">
                      {card_link_label}
                    </div>
                  )}
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    {card_button_link ? (
                      <Link
                        key={card_buuton_label}
                        to={card_button_link}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-900"
                      >
                        {card_buuton_label}
                      </Link>
                    ) : (
                      <div className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-900">
                        {card_buuton_label}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  {card_sample_link ? (
                    <Link
                      key={card_sample}
                      to={card_sample_link}
                      className="font-medium text-emerald-900"
                    >
                      {card_sample}{" "}
                      <span className="font-normal text-emerald-500">
                        {card_sample_size}
                      </span>
                    </Link>
                  ) : (
                    <div className="font-normal text-emerald-500">
                      {card_sample}{" "}
                      <span className="font-normal text-emerald-500">
                        {card_sample_size}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnePriceServiceSection
