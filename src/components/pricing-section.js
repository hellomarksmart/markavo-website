import * as React from "react"
import { Link } from "gatsby"
import { RichText } from 'prismic-reactjs';

const PricingSection = ({ pricingBody }) => {
  console.log("data on pricing section:", pricingBody)

  return (
    <div className="bg-emerald-900 px-5">
      <div className="max-w-[90%] mx-auto pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-[18px] leading-6 font-semibold text-emerald-300 uppercase tracking-wider">
            {pricingBody[0].primary.eyebrow_headline.text}
          </h2>
          <p className="text-3xl font-bold text-white sm:text-4xl sm:max-w-md md:max-w-3xl lg:max-w-4xl lg:text-[48px] mx-auto">
            {pricingBody[0].primary.title.text}
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-base text-emerald-300 sm:mt-5 sm:text-[20px] md:text-[24px] md:max-w-[46rem] sm:max-w-md">
            {pricingBody[0].primary.description.text}
          </p>
        </div>
      </div>
      <div className="mt-16 bg-emerald-900 pb-12 lg:mt-20 lg:pb-20">
        <div id="PricingCards" className="flex flex-column flex-wrap lg:flex-nowrap lg:flex-row items-center justify-center z-0">
          {pricingBody[0].items.length === 1 && (
            <>
              {pricingBody[0].items.map((item, i) => {
                return (
                  <div id="PricingCard" className="relative border-2 rounded-md bg-white text-center">
                    <p>Single card here</p>
                  </div>
                )
              })}
            </>
          )}
          {pricingBody[0].items.length === 2 && (
            <>
              {pricingBody[0].items.map((item, i) => {
                return (
                  <div id="PricingCard" className="relative border-2 rounded-md bg-white text-center">
                    <p>2 cards here</p>
                  </div>
                )
              })}
            </>
          )}
          {pricingBody[0].items.length === 3 && (
            <>
              {pricingBody[0].items.map((item, i) => {
                return (
                  <div id="PricingCard" className="relative border-2 rounded-md bg-white text-center">
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
                            /{item.subscription.text}
                          </span>
                        </div>
                        <div className="absolute bottom-0 w-full border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                          <div>
                            <RichText  render={item.features.richText} />
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
