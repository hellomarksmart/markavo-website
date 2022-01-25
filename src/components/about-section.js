import * as React from "react"

const AboutSection = ({ heading, description, about_items }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto py-0 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-16">
        <div className="space-y-12 xl:grid xl:grid-cols-3 xl:gap-8 xl:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-[36px]">
              {heading}
            </h2>
            <p className="font-sans text-[20px] text-gray-500">
              {description}
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              {about_items?.map((item, i) => {
                return (
                  <li key={i} className="sm:py-[32px] mb-0">
                    <div className="space-y-4 sm:space-y-0 sm:flex sm:flex-row">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4 ">
                        <img
                          className="h-[332px] w-[250px] object-cover shadow-lg rounded-lg"
                          src={item?.image.url}
                          alt=""
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4 mt-0">
                          <div className="font-sans leading-6 font-medium space-y-1">
                            <h3 className="mb-1 text-[18px]">
                              {item?.name.text}
                            </h3>
                            <p className="font-sans text-emerald-600 text-[18px]">
                              {item?.position.text}
                            </p>
                          </div>
                          <div className="text-lg">
                            <p className="font-sans text-gray-500 text-[18px]">
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
