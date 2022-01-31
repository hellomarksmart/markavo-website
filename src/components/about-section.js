import * as React from "react"

const AboutSection = ({ heading, description, about_items }) => {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-0 px-4 lg:pt-16">
        <div className="space-y-12 xl:grid xl:grid-cols-3 xl:gap-8 xl:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-[36px]">
              {heading}
            </h2>
            <p className="  text-[20px] text-gray-500">{description}</p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0 ml-0">
              {about_items?.map((item, i) => {
                return (
                  <li key={i} className="sm:py-[32px] mb-0">
                    <div className="w-[100%] space-y-4 sm:space-y-0 sm:flex md:flex-row sm:flex-col">
                      <div className="xl:w-[16rem] md:w-[15rem] sm:pb-6">
                        <img
                          className="sm:h-[332px] sm:w-[250px] w-[100%] h-[22rem] object-cover shadow-lg rounded-lg"
                          src={item?.image.url}
                          alt=""
                        />
                      </div>
                      <div className="sm:w-[66%] w-[100%] sm:col-span-2">
                        <div className="space-y-4 mt-0">
                          <div className="leading-6 font-medium space-y-1">
                            <h3 className="mb-1 text-[18px]">
                              {item?.name.text}
                            </h3>
                            <p className="text-emerald-600 text-[18px] pb-3">
                              {item?.position.text}
                            </p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500 text-[18px] sm:-mt-[1rem]">
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
