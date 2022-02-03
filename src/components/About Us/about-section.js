import * as React from "react"

const AboutSection = ({ heading, description, about_items }) => {
  return (
    <div className="bg-white">
      <div className="max-w-default mx-auto px-4 sm:px-6 lg:px-8 py-0 px-4 lg:pt-16">
        <div className="space-y-12 xl:grid xl:grid-cols-3 xl:gap-8 xl:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-3.5xl">
              {heading}
            </h2>
            <p className="text-lg text-gray-500">{description}</p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0 ml-0">
              {about_items?.map((item, i) => {
                return (
                  <li key={i} className="sm:py-[32px] mb-0">
                    <div className="w-full space-y-4 sm:space-y-0 sm:flex md:flex-row sm:flex-col">
                      <div className="xl:max-w-medium md:w-medium sm:pb-6">
                        <img
                          className="sm:h-imageH sm:w-imageW w-full h-imageH_sm object-cover shadow-lg rounded-lg"
                          src={item?.image.url}
                          alt={item?.image.alt ? item?.image.alt : ""}
                        />
                      </div>
                      <div className="w-full md:w-twoThirds w-full sm:col-span-2">
                        <div className="space-y-4 mt-0">
                          <div className="leading-6 font-medium space-y-1">
                            <h3 className="mb-1 text-base">
                              {item?.name.text}
                            </h3>
                            <p className="text-emerald-600 text-base pb-3">
                              {item?.position.text}
                            </p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500 text-base sm:-mt-[1rem]">
                              {item?.description.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
