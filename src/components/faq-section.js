import * as React from "react"

const FAQs = ({ heading, faq_contents }) => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-max mx-auto pt-12 pb-2 px-4 divide-y divide-gray-200 sm:px-6 lg:py-0 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">{heading}</h2>
        <div className="mt-8">
          <dl className="divide-y divide-gray-200">
            {faq_contents?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="pt-6 pb-2 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt className="text-base font-sans font-medium text-gray-900 md:col-span-5">
                    {item?.faq_question.text}
                  </dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7 mb-0 ">
                    <p className="text-base font-sans text-gray-500">
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
