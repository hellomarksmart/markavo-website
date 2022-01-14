import * as React from "react"
import { Link } from "gatsby"
import { CheckIcon } from "@heroicons/react/outline"

const threeCardsHeader = [
  {
    subheading: "pricing",
    heading: "The right price for you, whoever you are",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.",
  },
]

const firstCardPricing = [
  {
    title: "Hobby",
    currency: "$",
    price: "79",
    period: "/month",
  },
]
const firstCardFeatures = [
  {
    features: "Pariatur quod similique",
  },
  {
    features: "Sapiente libero doloribus",
  },
  {
    features: "Vel ipsa esse repudiandae",
  },
]
const firstCardButton = [
  {
    name: "Start your trial",
    link: "#",
  },
]

const secondCardPricing = [
  {
    title: "Growth",
    currency: "$",
    price: "149",
    period: "/month",
  },
]
const secondCardFeatures = [
  {
    features: "Quia rem est sed impedit magnam",
  },
  {
    features: "Dolorem vero ratione voluptates",
  },
  {
    features: "Qui sed ab doloribus voluptatem dolore",
  },
  {
    features: "Laborum commodi molestiae id et fugiat",
  },
  {
    features: "Nam ut ipsa nesciunt culpa modi dolor",
  },
]
const secondCardButton = [
  {
    name: "Start your trial",
    link: "#",
  },
]

const thirdCardPricing = [
  {
    title: "Scale",
    currency: "$",
    price: "349",
    period: "/month",
  },
]
const thirdCardFeatures = [
  {
    features: "Pariatur quod similique",
  },
  {
    features: "Sapiente libero doloribus",
  },
  {
    features: "Vel ipsa esse repudiandae",
  },
]
const thirdCardButton = [
  {
    name: "Start your trial",
    link: "#",
  },
]

const ThreePrice = () => {
  return (
    <div className="bg-emerald-700">
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        {threeCardsHeader.map(item => (
          <div className="text-center">
            <h2 className="text-lg leading-6 font-semibold text-emerald-100 uppercase tracking-wider">
              {item.subheading}
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {item.heading}
            </p>
            <p className="mt-3 max-w-4xl mx-auto text-xl text-emerald-100 sm:mt-5 sm:text-2xl">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-emerald-700 lg:h-2/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      {firstCardPricing.map(item => (
                        <div>
                          <h3
                            className="text-center text-2xl font-medium text-gray-900"
                            id="tier-hobby"
                          >
                            {item.title}
                          </h3>
                          <div className="mt-4 flex items-center justify-center">
                            <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                              <span className="mt-2 mr-2 text-4xl font-medium">
                                {item.currency}
                              </span>
                              <span className="font-extrabold">
                                {item.price}
                              </span>
                            </span>
                            <span className="text-xl font-medium text-gray-500">
                              {item.period}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-emerald-100 p-6 bg-emerald-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {firstCardFeatures.map(item => (
                          <li key={item.features} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {item.features}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          {firstCardButton.map(item => (
                            <Link
                              to={item.link}
                              className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-emerald-400 hover:bg-emerald-50"
                              aria-describedby="tier-hobby"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-emerald-400"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-emerald-400 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    {secondCardPricing.map(item => (
                      <div>
                        <h3
                          className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
                          id="tier-growth"
                        >
                          {item.title}
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              {item.currency}
                            </span>
                            <span className="font-extrabold">{item.price}</span>
                          </span>
                          <span className="text-2xl font-medium text-gray-500">
                            {item.period}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t-2 border-emerald-100 rounded-b-lg pt-10 pb-8 px-6 bg-emerald-50 sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {secondCardFeatures.map(item => (
                        <li key={item.features} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="flex-shrink-0 h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {item.features}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        {secondCardButton.map(item => (
                          <Link
                            to={item.link}
                            className="block w-full text-center rounded-lg border border-transparent bg-emerald-400 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-emerald-500"
                            aria-describedby="tier-growth"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      {thirdCardPricing.map(item => (
                        <div>
                          <h3
                            className="text-center text-2xl font-medium text-gray-900"
                            id="tier-scale"
                          >
                            {item.title}
                          </h3>
                          <div className="mt-4 flex items-center justify-center">
                            <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                              <span className="mt-2 mr-2 text-4xl font-medium">
                                {item.currency}
                              </span>
                              <span className="font-extrabold">
                                {item.price}
                              </span>
                            </span>
                            <span className="text-xl font-medium text-gray-500">
                              {item.period}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-emerald-100 p-6 bg-emerald-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {thirdCardFeatures.map(item => (
                          <li key={item.features} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {item.features}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          {thirdCardButton.map(item => (
                            <Link
                              to={item.link}
                              className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-emerald-400 hover:bg-emerald-50"
                              aria-describedby="tier-scale"
                            >
                              {item.name}
                            </Link>
                          ))}
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

export default ThreePrice
