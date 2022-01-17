import * as React from "react"

const StatsText = [
  {
    heading: "Trusted by developers from over 80 planets",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.",
  },
]

const StatsContent = [
  {
    nameLeft: "Pepperoni",
    statsLeft: "100%",
    nameCenter: "Delivery",
    statsCenter: "24/7",
    nameRight: "Calories",
    statsRight: "100k",
  },
]

const Statistics = () => {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {StatsText.map(item => (
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {item.heading}
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {StatsContent.map(item => (
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      {item.nameLeft}
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-emerald-400">
                      {item.statsLeft}
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      {item.nameCenter}
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-emerald-400">
                      {item.statsCenter}
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      {item.nameRight}
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-emerald-400">
                      {item.statsRight}
                    </dd>
                  </div>
                </dl>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics