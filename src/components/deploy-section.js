import * as React from "react"

const Deploy = ({ title, heading, description, cards }) => {
  return (
    <div className="relative bg-white pt-16 pb-4 sm:pt-18 lg:pt-18">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-holder">
          <h2 className="text-[16px] font-bold tracking-wider text-emerald-500 uppercase mb-2">
            {title}
          </h2>
          <p className="mt-0 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-[36px] md:max-w-full sm:max-w-md sm:mx-auto">
            {heading}
          </p>
          <p className="mt-3 max-w-sm mx-auto text-base text-gray-500 sm:max-w-md sm:text-lg md:mt-5 md:text-[20px] md:max-w-[47rem]">
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
                    <div className="-mt-6">
                      {item?.icon.url ? (
                        <div>
                          <span className="inline-flex items-center justify-center py-[.65rem] px-[0.7rem] bg-emerald-500 rounded-md shadow-lg">
                            <img
                              src={item?.icon.url}
                              className="h-5 w-5 text-gray-900 mb-0"
                              alt="icon"
                            />
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                      <h3 className="mt-8 mb-3 text-[18px] font-bold text-gray-900 tracking-tight">
                        {item?.title.text}
                      </h3>
                      <p className="mt-2 text-[16px] text-gray-500">
                        {item?.content.text}
                      </p>
                    </div>
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
