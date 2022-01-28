import * as React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"

const PricingSection = ({ pricingBody }) => {
  console.log("data on pricing section:", pricingBody)

  return (
    <div
      className={
        pricingBody[0].items.length === 1
          ? `bg-gray-100`
          : `bg-emerald-900 px-5` ||
        pricingBody[0].items.length === 2
        ? `bg-emerald-700`
        : `bg-emerald-900 px-5`
      }
    >
      <div className="max-w-[90%] mx-auto pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-[18px] leading-6 font-semibold text-emerald-300 uppercase tracking-wider">
            {pricingBody[0].primary.eyebrow_headline.text}
          </h2>
          <p
            className={
              pricingBody[0].items.length === 1
                ? "text-3xl font-bold text-gray-900 sm:text-4xl sm:max-w-md md:max-w-3xl lg:max-w-4xl lg:text-[48px] mx-auto"
                : "text-3xl font-bold text-white sm:text-4xl sm:max-w-md md:max-w-3xl lg:max-w-4xl lg:text-[48px] mx-auto"
            }
          >
            {pricingBody[0].primary.title.text}
          </p>
          <p
            className={`mt-3 max-w-4xl mx-auto text-base ${
              pricingBody[0].items.length === 1
                ? `text-gray-600`
                : `text-emerald-100`
            } sm:mt-5 sm:text-[20px] md:text-[24px] md:max-w-[46rem] sm:max-w-md`}
          >
            {pricingBody[0].primary.description.text}
          </p>
        </div>
      </div>
      <div
        className={`mt-16 ${
          pricingBody[0].items.length === 1 ? "" : `bg-emerald-900` || 
          pricingBody[0].items.length === 2 ? `bg-emerald-50` : `bg-emerald-900`
        } pb-12 lg:mt-20 lg:pb-20`}
      >
        <div
          id="PricingCards"
          className="flex flex-column flex-wrap lg:flex-nowrap lg:flex-row items-center justify-center z-0"
        >
          {pricingBody[0].items.length === 1 && (
            <>
              {pricingBody[0].items.map((item, i) => {
                return (
                  <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
                    <div className="relative">
                      <div className="absolute inset-0 h-1/2 bg-gray-100" />
                      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                          <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                            <h3 className="text-[24px] font-extrabold text-gray-900 sm:text-[30px]">
                              {item.plan_title.text}
                            </h3>
                            <p className="mt-6 text-base text-gray-500 text-[16px]">
                              <RichText
                                render={item.plan_description.richText}
                              />
                            </p>
                            <div className="mt-8">
                              <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 bg-white text-[14px] tracking-wider font-semibold uppercase text-emerald-600 mb-0">
                                  WHAT'S INCLUDED?
                                </h4>
                                <div className="flex-1 border-t-2 border-gray-200" />
                              </div>
                              <div className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 ml-0">
                                <RichText render={item.features.richText} />
                              </div>
                            </div>
                          </div>
                          <div className="py-8 px-6 text-center bg-emerald-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                            <p className="text-[18px] leading-6 font-medium text-gray-900 mb-0">
                              {item.headline.text}
                            </p>
                            <div className="mt-4 flex items-center justify-center text-[48px] font-extrabold text-gray-900">
                              <span>
                                {item.currency.text}
                                {item.price_option.text}
                              </span>
                              <span className="ml-3 text-[20px] font-medium text-gray-500">
                                {item.frequency.text}
                              </span>
                            </div>
                            <div className="mt-6">
                              <div>
                                {item.call_to_action.url ? (
                                  <Link
                                    to={item.call_to_action.url}
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-[16px] font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-900"
                                  >
                                    {item.call_to_action_text.text}
                                  </Link>
                                ) : (
                                  <div className="flex items-center justify-center px-5 py-3 border border-transparent text-[16px] font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-900">
                                    {item.call_to_action_text.text}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="mt-4 text-[14px]">
                              <div>
                                {item.cta_bottom_text.text ? (
                                  <div className="font-normal text-emerald-500">
                                    {item.cta_bottom_text.text}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </>
          )}
          {pricingBody[0].items.length === 2 && (
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                {pricingBody[0].items.map((item, i) => {
                  return (
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                      <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                        <div>
                          <h3
                            className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-emerald-100 text-emerald-600"
                            id="tier-standard"
                          >
                            {item.plan_title.text}
                          </h3>
                        </div>
                        <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                          {item.currency.text}
                          {item.price_option.text}
                          <span className="ml-1 text-2xl font-medium text-gray-500">
                            /{item.frequency.text}
                          </span>
                        </div>
                        <p className="mt-5 text-lg text-gray-500">
                          <RichText render={item.plan_description.richText} />
                        </p>
                      </div>
                      <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                        <RichText render={item.features.richText} />
                        <div className="rounded-md shadow">
                          {item.call_to_action.url ? (
                            <Link
                              to={item.call_to_action.url}
                              className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-900"
                              aria-describedby="tier-standard"
                            >
                              {item.call_to_action_text.text}
                            </Link>
                          ) : (
                            <div
                              className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-900"
                              aria-describedby="tier-standard"
                            >
                              {item.call_to_action_text.text}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
          {pricingBody[0].items.length === 3 && (
            <>
              {pricingBody[0].items.map((item, i) => {
                return (
                  <div
                    id="PricingCard"
                    className="relative border-2 rounded-md bg-white text-center"
                  >
                    <div className="card-body py-10">
                      <div>
                        <h3 className="text-center text-[24px] font-medium text-gray-900">
                          {item.plan_title.text}
                        </h3>
                        <div className="mt-4 flex items-center justify-center ">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-[36px] font-normal">
                              {item.currency.text}
                            </span>
                            <span className="font-bold text-[60px]">
                              {item.price_option.text}
                            </span>
                          </span>
                          <span className="text-xl font-normal text-gray-500">
                            /{item.frequency.text}
                          </span>
                        </div>
                        <div className="absolute bottom-0 w-full border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                          <div>
                            <RichText render={item.features.richText} />
                          </div>
                          <div className="mt-8">
                            <div className="rounded-lg shadow-md cta">
                              {item.call_to_action.url ? (
                                <Link
                                  to={item.call_to_action.url}
                                  className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-[16px] font-medium text-emerald-600 hover:bg-gray-50"
                                  aria-describedby="tier-hobby"
                                >
                                  {item.call_to_action_text.text}
                                </Link>
                              ) : (
                                <div className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-emerald-600 hover:bg-gray-50">
                                  {item.call_to_action_text.text}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PricingSection
