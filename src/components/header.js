// import React, { Fragment, useState, useEffect } from "react"
import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { PlayIcon, PhoneIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { SearchIcon } from "@heroicons/react/solid"
import { LanguageToggle } from "../components/Reusable Components/language-toggle"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Header = ({ topHeader, activeDoc }) => {
  // const [containsES, setContainsES] = useState(false)

  // useEffect(() => {
  //   const browserLanguages = navigator.languages
  //   const filterLanguage = array => {
  //     return array.filter(element => {
  //       if (element === "es-MX") return setContainsES(true)
  //     })
  //   }

  //   filterLanguage(browserLanguages)
  // }, [])

  const headerData = topHeader || []

  const headerLogo = headerData.data.header_logo.url
  const phoneNumber = headerData.data.phone_number.text
  const services = headerData.data.services
  const allServices = headerData.data.all_services
  const brandingTools = headerData.data.branding_tools

  return (
    <Popover className="relative bg-white z-40">
      <div className="flex justify-between items-center px-4 py-4 border-b-gray-200 border border-t-0 border-r-0 border-l-0 sm:px-6 md:justify-end md:space-x-10 md:flex sm:hidden hidden">
        <div className="flex space-x-4 items-center md:ml-12">
          <div className="flex px-3">
            <PhoneIcon
              className="h-6 w-6 md:h-5 md:w-5 md:mt-xs text-transparent fill-gray-900"
              aria-hidden="true"
            />
            <Link
              href={`tel:+${phoneNumber}`}
              className="text-md lg:text-base md:text-sm font-semibold text-gray-900 pl-1 hover:text-gray-800"
            >
              {phoneNumber}
            </Link>
          </div>
          <Link
            to="/contact-us"
            className="ml-8 inline-flex items-center justify-center px-3 py-1.2 border border-gray-400 rounded-md shadow-sm lg:text-sm md:text-sm font-medium text-gray-900 bg-white hover:bg-gray-50"
          >
            Contact Us
          </Link>
          <Link
            to="/markavo-reviews"
            className="text-md lg:text-base md:text-sm font-medium text-gray-900 px-3 hover:text-gray-800"
          >
            Client Reviews
          </Link>
          {/* {containsES &&
            <> */}
          {activeDoc ? <LanguageToggle activeDocMeta={activeDoc} /> : ""}
          {/* </>
          } */}
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-4 border-b-gray-200 border border-t-0 border-r-0 border-l-0 sm:px-6 md:justify-start lg:space-x-10">
        <div className="lg:w-auto sm:w-2/12 w-4/12">
          <Link to="/" className="flex">
            <span className="sr-only">Markvao</span>
            <img className="mb-0" src={headerLogo} width={202} alt="Markavo" />
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Popover.Group
            as="nav"
            className="flex space-x-4 items-center lg:justify-between md:justify-end w-full"
          >
            <div className="flex">
              <Popover className="">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-900",
                        "group inline-flex items-center lg:mr-6 md:mr-2 text-md lg:text-base md:text-sm font-medium text-gray-900 hover:text-gray-800 focus:outline-none"
                      )}
                    >
                      <span>Our Services</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-900",
                          "lg:ml-1 md:ml-0 mt-1 md:mt-0 lg:h-5 lg:w-5 md:h-4 md:w-4 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10  mt-3 transform w-full left-0">
                        <div className="rounded-b-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2 xl:grid-cols-4 ">
                            {services.map((item, i) => (
                              <Link
                                key={i}
                                to={item.link.url ? item.link.url : "#"}
                                className="-m-3 p-3  flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gray-900 text-white sm:h-12 sm:w-12">
                                  {item.icon.url ? (
                                    <img
                                      src={item.icon.url}
                                      className="h-6 w-6 mb-0 invert"
                                      alt={item.icon.alt}
                                    />
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900 mb-0">
                                    {item.name.text ? item.name.text : ""}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-700 mb-0">
                                    {item.description.text
                                      ? item.description.text
                                      : ""}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="bg-gray-50">
                            <div className=" max-w-full mx-auto space-y-6 px-4 py-5 sm:flex sm:justify-center sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                              {allServices.map((item, i) => (
                                <div key={i} className="flow-root">
                                  <Link
                                    to={item.link.url ? item.link.url : "#"}
                                    className="-m-3 p-3 flex items-center rounded-md text-sm font-medium text-gray-900 hover:bg-gray-400 transition ease-in-out duration-150"
                                  >
                                    {item.icon.url ? (
                                      <img
                                        src={item.icon.url}
                                        className="flex-shrink-0 h-6 w-6 text-gray-900"
                                        alt={item.icon.alt}
                                      />
                                    ) : (
                                      <PlayIcon
                                        className="flex-shrink-0 h-6 w-6 text-gray-900"
                                        aria-hidden="true"
                                      />
                                    )}
                                    <span className="ml-3">
                                      {item.name.text ? item.name.text : ""}
                                    </span>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-900",
                        "group inline-flex items-center lg:mr-6 md:mr-2 text-md lg:text-base md:text-sm font-medium text-gray-900 hover:text-gray-800 focus:outline-none"
                      )}
                    >
                      <span>Branding Tools</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-900",
                          "lg:ml-1 md:ml-0 mt-1 md:mt-0 lg:h-5 lg:w-5 md:h-4 md:w-4 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 left-0 transform -translate-x-0 mt-3 px-2 md:w-large lg:w-Xlarge max-w-xs sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-4 bg-white px-5 py-6 sm:gap-4 sm:p-8">
                            {brandingTools.map((item, i) => (
                              <Link
                                key={i}
                                to={item.link.url ? item.link.url : "#"}
                                className="-m-3 mb-0 p-3  block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-sm font-medium text-gray-900 mb-0">
                                  {item.name.text ? item.name.text : ""}
                                </p>
                                <p className="mt-1 text-sm text-gray-700 mb-0">
                                  {item.description.text
                                    ? item.description.text
                                    : ""}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link
                to="/about-us"
                className="lg:mr-3 mr-0 text-md lg:text-base md:text-sm font-medium text-gray-900 hover:text-gray-800 lg:pt-0 md:pt-xs"
              >
                About Us
              </Link>
            </div>
            <div className="max-w-none w-auto lg:max-w-xs">
              <div className="relative">
                <Link
                  to="/free-trademark-search"
                  className="inline-flex items-center justify-center px-3 py-1.2 border border-gray-400 rounded-md shadow-sm text-sm lg:text-sm md:text-xs font-medium text-gray-900 bg-white hover:bg-gray-50"
                >
                  <span>Free Trademark Search</span>
                  <SearchIcon
                    className="ml-2 lg:h-4 lg:w-4 md:h-3 md:w-3"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="mb-0"
                    src={headerLogo}
                    width={202}
                    alt="Markavo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {services.map((item, i) => (
                    <Link
                      key={i}
                      to={item.link.url ? item.link.url : "#"}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gray-900 text-white">
                        {item.icon.url ? (
                          <img
                            src={item.icon.url}
                            className="h-6 w-6 mb-0 invert"
                            alt={item.icon.alt}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="ml-4 text-sm  font-medium text-gray-900">
                        {item.name.text ? item.name.text : ""}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-1 gap-4">
                <Link
                  to="/markavo-reviews"
                  className="text-sm  font-medium text-gray-900 hover:text-gray-800"
                >
                  Client Reviews
                </Link>
                <Link
                  to="/about-us"
                  className="text-sm  font-medium text-gray-900 hover:text-gray-800"
                >
                  About Us
                </Link>
                <Link
                  to="/free-trademark-search"
                  className="text-sm  font-medium text-gray-900 hover:text-gray-800"
                >
                  Free Trademark Search
                </Link>
              </div>
              <div className="mt-12">
                {/* {containsES && (
                  <> */}
                {activeDoc ? (
                  <div className="pb-6 text-center text-sm font-medium text-gray-900">
                    <LanguageToggle activeDocMeta={activeDoc} />
                  </div>
                ) : (
                  ""
                )}
                {/* </>
                )} */}
                <Link
                  to="/contact-us"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm  font-medium text-white bg-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400"
                >
                  Contact Us
                </Link>
                <div className="flex justify-center px-3 mt-6">
                  <PhoneIcon
                    className="h-6 w-6 text-transparent fill-gray-900"
                    aria-hidden="true"
                  />
                  <Link
                    href={`tel:+${phoneNumber}`}
                    className="text-md text-center  font-semibold text-gray-900 pl-1 hover:text-gray-800"
                  >
                    {phoneNumber}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
