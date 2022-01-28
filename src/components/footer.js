import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const footerData = useStaticQuery(graphql`
    query FooterQuery {
      prismicFooter {
        data {
          applications {
            link {
              url
            }
            link_name {
              text
            }
            link_title {
              text
            }
          }
          company {
            link {
              url
            }
            link_name {
              text
            }
            link_title {
              text
            }
          }
          disputes {
            link {
              url
            }
            link_name {
              text
            }
            link_title {
              text
            }
          }
          registrations {
            link {
              url
            }
            link_name {
              text
            }
            link_title {
              text
            }
          }
          footer_copyright {
            text
          }
        }
      }
    }
  `)

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-7">
        <div className="pb-8 xl:grid xl:grid-cols-4 xl:gap-4">
          <div className="grid grid-cols-2 gap-4 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                  Applications
                </h3>
                <ul className="mt-4 space-y-4 ml-0">
                  {footerData.prismicFooter.data.applications.map((item, i) => {
                    return (
                      <li key={i}>
                        {item.link.url ? (
                          <a
                            href={item.link.url}
                            className="text-sm font-medium text-gray-500 hover:text-gray-600"
                            title={item.link_title.text}
                          >
                            {item.link_name.text}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-emerald-400 hover:text-emerald-600">
                            {item.link_name.text}
                          </p>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                  Registrations
                </h3>
                <ul className="mt-4 space-y-4 ml-0">
                  {footerData.prismicFooter.data.registrations.map(
                    (item, i) => (
                      <li key={i}>
                        {item.link.url ? (
                          <a
                            href={item.link.url}
                            className="text-sm font-medium text-emerald-400 hover:text-emerald-600"
                            title={item.link_title.text}
                          >
                            {item.link_name.text}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-emerald-400 hover:text-emerald-600">
                            {item.link_name.text}
                          </p>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                  Disputes
                </h3>
                <ul className="mt-4 space-y-4 ml-0">
                  {footerData.prismicFooter.data.disputes.map((item, i) => (
                    <li key={i}>
                      {item.link.url ? (
                        <a
                          href={item.link.url}
                          className="text-sm font-medium text-gray-500 hover:text-gray-600"
                          title={item.link_title.text}
                        >
                          {item.link_name.text}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-emerald-400 hover:text-emerald-600">
                          {item.link_name.text}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4 ml-0">
                  {footerData.prismicFooter.data.company.map((item, i) => (
                    <li key={i}>
                      {item.link.url ? (
                        <a
                          href={item.link.url}
                          className="text-sm font-medium text-gray-500 hover:text-gray-600"
                          title={item.link_title.text}
                        >
                          {item.link_name.text}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-emerald-400 hover:text-emerald-600">
                          {item.link_name.text}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
              Newsletter
            </h3>
            <p className="mt-2 text-sm font text-gray-500">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="appearance-none min-w-0 w-full bg-white border border-gray-500 rounded-md py-2 px-4 text-sm text-gray-400 placeholder-gray-400 focus:outline-none sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full bg-gray-900 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-bold text-white hover:bg-white hover:border-gray-900 hover:text-gray-900 focus:outline-none"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-sm font-light text-gray-500 md:mt-0 md:order-1">
            {footerData.prismicFooter.data.footer_copyright.text}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
