import * as React from "react"

const FAQs = ({ title, heading, description, faq_contents }) => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
        <h2 className="text-[16px] text-center font-bold tracking-wider text-emerald-500 uppercase mb-2">
          {title}
        </h2>
        <h2 className="text-[30px] text-center font-extrabold text-gray-900">
          {heading}
        </h2>
        <p className="mt-3 text-base sm:text-[20px] text-center font-normal text-gray-500 sm:mt-4 sm:max-w-md sm:mx-auto md:max-w-3xl">
          {description}
        </p>
        <div className="mt-8">
          <dl className="divide-y divide-gray-200">
            {faq_contents?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="pt-6 pb-2 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt className="text-[16px] font-medium text-gray-900 md:col-span-5">
                    {item?.faq_question.text}
                  </dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7 mb-0 ">
                    <p className="text-[16px] text-gray-500">
                      {item?.faq_answer.text}
                    </p>
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

export default FAQs
