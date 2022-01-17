import * as React from "react"
import { Link } from "gatsby"
import { CheckCircleIcon } from "@heroicons/react/solid"

const onePriceHeader = [
  {
    heading: "Simple no-tricks pricing",
    description:
      "If you're not satisfied, contact us within the first 14 days and we'll send you a full refund.",
  },
]
const onePriceDescription = [
  {
    heading: "Lifetime Membership",
    description:
      "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.",
    includedHeading: "WHAT'S INCLUDED",
  },
]
const includedFeatures = [
  {
    features: "Private forum access",
  },
  {
    features: "Member resources",
  },
  {
    features: "Entry to annual conference",
  },
  {
    features: "Official member t-shirt",
  },
]
const onePriceLeftContent = [
  {
    subheading: "Pay once, own it forever",
    currency: "$",
    price: "349",
    currencyText: "USD",
    membershipPolicy: "Learn about our membership policy",
    membershipPolicyLink: "#",
    button: "Get Access",
    buttonLink: "#",
    sample: "Get a free sample",
    sampleLink: "#",
    sampleSize: "(20MB)",
  },
]

const OnePriceServiceSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {onePriceHeader.map(item => (
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                {item.heading}
              </h2>
              <p className="mt-4 text-xl text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              {onePriceDescription.map(item => (
                <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    {item.heading}
                  </h3>
                  <p className="mt-6 text-base text-gray-500">
                    {item.description}
                  </p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-emerald-600">
                        {item.includedHeading}
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />
                    </div>
                    <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                      {includedFeatures.map(item => (
                        <li
                          key={item.features}
                          className="flex items-start lg:col-span-1"
                        >
                          <div className="flex-shrink-0">
                            <CheckCircleIcon
                              className="h-5 w-5 text-green-400"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            {item.features}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              {onePriceLeftContent.map(item => (
                <div className="py-8 px-6 text-center bg-emerald-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                  <p className="text-lg leading-6 font-medium text-gray-900">
                    {item.subheading}
                  </p>
                  <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                    <span>
                      {item.currency}
                      {item.price}
                    </span>
                    <span className="ml-3 text-xl font-medium text-gray-500">
                      {item.currencyText}
                    </span>
                  </div>
                  <p className="mt-4 text-sm">
                    <Link
                      to={item.membershipPolicyLink}
                      className="font-medium text-emerald-500 underline"
                    >
                      {item.membershipPolicy}
                    </Link>
                  </p>
                  <div className="mt-6">
                    <div className="rounded-md shadow">
                      <Link
                        to={item.buttonLink}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-900"
                      >
                        {item.button}
                      </Link>
                    </div>
                  </div>
                  <div className="mt-4 text-sm">
                    <Link
                      to={item.sampleLink}
                      className="font-medium text-emerald-900"
                    >
                      {item.sample}{" "}
                      <span className="font-normal text-emerald-500">
                        {item.sampleSize}
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnePriceServiceSection
