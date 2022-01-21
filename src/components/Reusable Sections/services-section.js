import * as React from "react"
import { Link } from "gatsby"
import { CheckIcon } from "@heroicons/react/outline"
import { ArrowRightIcon } from "@heroicons/react/solid"

const ServicesSection = ({ title, heading, description, service_items }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-emerald-600 uppercase tracking-wide">
            {title}
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            {heading}
          </p>
          <p className="mt-4 text-lg text-gray-500">{description}</p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {service_items?.map((item, i) => {
              return (
                <div key={i} className="relative">
                  <dt>
                    <CheckIcon
                      className="absolute h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                      {item?.title.text}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-9 text-base text-gray-500">
                    {item?.content.text}
                  </dd>
                  <dd className="ml-9 text-base">
                    {item?.link.url ? (
                      <Link
                        key={item?.link.url}
                        to={item?.link.url}
                        className="text-emerald-400 flex items-center hover:text-emerald-500"
                      >
                        {item?.link_label.text}{" "}
                        <ArrowRightIcon
                          className="h-6 w-6 pl-2"
                          aria-hidden="true"
                        />
                      </Link>
                    ) : (
                      <div className="text-emerald-400 flex items-center hover:text-emerald-500">
                        {item?.link_label.text}{" "}
                        <ArrowRightIcon
                          className="h-6 w-6 pl-2"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
