import * as React from "react"
import { Link } from "gatsby"
import { CheckIcon } from "@heroicons/react/outline"
import { ArrowRightIcon } from "@heroicons/react/solid"

const ServicesSection = ({ title, heading, description, service_items }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pt-10 lg:pt-16 md:pt-10 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="pt-1 text-[16px] font-sans font-semibold text-emerald-400 uppercase tracking-wide">
            {title}
          </h2>
          <p className="mt-2 text-[30px] font-sans font-extrabold text-gray-900">
            {heading}
          </p>
          <p className="mt-4 text-[18px] font-sans text-gray-500">
            {description}
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 font-sans">
            {service_items?.map((item, i) => {
              return (
                <div key={i} className="relative">
                  <dt>
                    <CheckIcon
                      className="absolute h-6 w-6 text-emerald-400"
                      aria-hidden="true"
                    />
                    <p className="ml-9 mb-2 text-[18px] leading-6 text-gray-900">
                      {item?.title.text}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-9 mb-2 text-[16px] text-gray-500">
                    {item?.content.text}
                  </dd>
                  <dd className="ml-9 text-[16px] mb-0">
                    {item?.link.url ? (
                      <Link
                        key={item?.link.url}
                        to={item?.link.url}
                        className="text-emerald-400 flex items-center font-semibold hover:text-emerald-500"
                      >
                        {item?.link_label.text}{" "}
                        <ArrowRightIcon
                          className="h-6 w-6 pl-2 pt-1"
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
