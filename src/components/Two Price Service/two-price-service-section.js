import * as React from "react"
import { Link } from "gatsby"
import { CheckIcon } from "@heroicons/react/solid"

const twoPriceHeader = [
  {
    subheading: "Pricing",
    heading: "The right price for you, whoever you are",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.",
  },
]
const tiers = [
  {
    name: "Standard",
    href: "#",
    priceMonthly: 49,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    button: "Get started",
    features: [
      "Pariatur quod similique",
      "Sapiente libero doloribus modi nostrum",
      "Vel ipsa esse repudiandae excepturi",
      "Itaque cupiditate adipisci quibusdam",
    ],
  },
  {
    name: "Enterprise",
    href: "#",
    priceMonthly: 79,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    button: "Get started",
    features: [
      "Pariatur quod similique",
      "Sapiente libero doloribus modi nostrum",
      "Vel ipsa esse repudiandae excepturi",
      "Itaque cupiditate adipisci quibusdam",
    ],
  },
]
const discount = [
  {
    subheading: "Discounted",
    description:
      "Get full access to all of standard license features for solo projects that make less than $20k gross revenue for",
    price: "29",
    discountButton: "Buy Discounted License",
    discountLink: "#",
  },
]

const TwoPriceServiceSection = () => {
  return (
    <div className="bg-emerald-700">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {twoPriceHeader.map(item => (
            <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
              <h2 className="text-lg leading-6 font-semibold text-emerald-100 uppercase tracking-wider">
                {item.subheading}
              </h2>
              <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                {item.heading}
              </p>
              <p className="text-xl text-emerald-100">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 pb-12 bg-emerald-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-emerald-700" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map(tier => (
                <div
                  key={tier.name}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-emerald-100 text-emerald-600"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                      ${tier.priceMonthly}
                      <span className="ml-1 text-2xl font-medium text-gray-500">
                        /mo
                      </span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map(feature => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base text-gray-700">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <Link
                        to={tier.href}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-900"
                        aria-describedby="tier-standard"
                      >
                        {tier.button}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            {discount.map(item => (
              <div className="rounded-lg bg-emerald-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                <div className="flex-1">
                  <div>
                    <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-emerald-800">
                      {item.subheading}
                    </h3>
                  </div>
                  <div className="mt-4 text-lg text-gray-600">
                    {item.description}{" "}
                    <span className="font-semibold text-gray-900">
                      ${item.price}
                    </span>
                    .
                  </div>
                </div>
                <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                  <Link
                    to={item.discountLink}
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-900 bg-white hover:bg-emerald-50"
                  >
                    {item.discountButton}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoPriceServiceSection