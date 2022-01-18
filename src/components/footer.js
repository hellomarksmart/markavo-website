import React from "react"
import { Link } from "gatsby"

const navigation = {
  applications: [
    { name: "U.S. Trademark Application Service", href: "#" },
    { name: "File an International Trademark", href: "#" },
    { name: "U.S. Trademark Office Action Response Service", href: "#" },
    { name: "U.S. Trademark Statement of Use (or Extension)", href: "#" },
    { name: "U.S. Trademark Search Services", href: "#" },
  ],
  registrations: [
    { name: "U.S. Trademark Renewal Services", href: "#" },
    { name: "U.S. Trademark Ownership Assignments", href: "#" },
    { name: "U.S. Trademark Address Updates", href: "#" },
    { name: "U.S. Trademark Monitoring Service", href: "#" },
  ],
  disputes: [
    { name: "Letter of Protest", href: "#" },
    { name: "Expungement Proceedings", href: "#" },
    { name: "Reexamination Proceedings", href: "#" },
    { name: "Cease and Desist Letters", href: "#" },
    { name: "Respond to an Extension to Oppose", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Client Reviews", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-7">
        <div className="pb-8 xl:grid xl:grid-cols-4 xl:gap-4">
          <div className="grid grid-cols-2 gap-4 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div>
                <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                  Applications
                </h3>
                <ul className="mt-4 space-y-4 ml-0">
                  {navigation.applications.map(item => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-emerald-400 hover:text-emerald-600"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                  Registrations
                </h3>
                <ul className="mt-4 space-y-4 ml-0">
                  {navigation.registrations.map(item => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-emerald-400 hover:text-emerald-600"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div>
                <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                  Disputes
                </h3>
                <ul className="mt-4 space-y-4 ml-0">
                  {navigation.disputes.map(item => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-emerald-400 hover:text-emerald-600"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4 ml-0">
                  {navigation.company.map(item => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-emerald-400 hover:text-emerald-600"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-emerald-400 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
              Newsletter
            </h3>
            <p className="mt-2 text-sm text-emerald-400">
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
              className="appearance-none min-w-0 w-full bg-white border border-emerald-400 rounded-md py-2 px-4 text-sm text-gray-400 placeholder-emerald-400 focus:outline-none sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full bg-emerald-400 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium text-white hover:bg-white hover:border-emerald-400 hover:text-emerald-400 focus:outline-none"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-emerald-400 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-sm text-emerald-400 md:mt-0 md:order-1">
            Markavo® is a registered trademark. Copyright © 2022 Markavo, LLC.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
