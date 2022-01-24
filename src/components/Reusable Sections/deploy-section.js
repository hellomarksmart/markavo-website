import * as React from "react"
import { CloudUploadIcon } from "@heroicons/react/outline"

const Deploy = ({ title, heading, description, cards }) => {
  return (
    <div className="relative bg-white pt-16 pb-4 sm:pt-18 lg:pt-18">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-[16px] font-semibold font-sans tracking-wider text-emerald-500 uppercase mb-2">
            {title}
          </h2>
          <p className="mt-0 text-3xl font-extrabold font-sans text-gray-900 tracking-tight sm:text-[36px]">
            {heading}
          </p>
          <p className="mt-5 max-w-prose mx-auto font-sans text-[20px] text-gray-500">
            {description}
          </p>
        </div>

        <div className="my-12 bg-white">
          <div className="pt-0">
            <div className="bg-white grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {cards?.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flow-root bg-gray-50 rounded-lg px-6 pb-8"
                  >
                    {/* {item?.icon.url ? (
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg"></span>
                      </div>
                    ) : ( */}
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg">
                        <CloudUploadIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    {/* )} */}
                    <h3 className="mt-8 mb-3 text-[18px] font-medium text-gray-900 tracking-tight">
                      {item?.title.text}
                    </h3>
                    <p className="mt-2 text-[16px] font-sans text-gray-500">
                      {item?.content.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deploy
