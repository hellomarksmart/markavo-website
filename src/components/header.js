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
  const headerData = topHeader || []

  const headerLogo = headerData.data.header_logo.url
  const headerLink = headerData.data.header_link.url
  const phoneNumber = headerData.data.phone_number.text
  const contactUs = headerData.data.contact_us.text
  const contactUsLink = headerData.data.contact_us_link.url
  const clientReviews = headerData.data.client_reviews.text
  const clientReviewsLink = headerData.data.client_reviews_link.url
  const freeTrademark = headerData.data.free_trademark_search.text
  const freeTrademarkLink = headerData.data.free_trademark_search_link.url
  const serviceTitle = headerData.data.service_title.text
  const brandingTitle = headerData.data.branding_tools_title.text
  const services = headerData.data.services
  const allServices = headerData.data.all_services
  const brandingTools = headerData.data.branding_tools
  const aboutLink = headerData.data.about_link.url
  const aboutUs = headerData.data.about_us.text

  return (
    <Popover className="relative bg-white z-40">
      <div className="flex justify-between items-center px-4 py-4 border-b-gray-200 border border-t-0 border-r-0 border-l-0 hidden sm:px-6 sm:hidden md:justify-end md:space-x-10 md:flex">
        <div className="flex items-center space-x-4 md:ml-12">
          <div className="flex px-3">
            <PhoneIcon
              className="h-6 w-6 text-transparent fill-gray-900 md:h-5 md:w-5 md:mt-xs"
              aria-hidden="true"
            />
            <Link
              href={`tel:+${phoneNumber}`}
              className="text-md font-semibold text-gray-900 hover:text-gray-800 pl-1 lg:text-base md:text-sm"
            >
              {phoneNumber}
            </Link>
          </div>
          <Link
            to={contactUsLink}
            className="ml-8 inline-flex items-center justify-center px-3 py-1.2 border border-gray-400 rounded-md shadow-sm font-medium text-gray-900 bg-white hover:bg-gray-50 md:text-sm lg:text-sm"
          >
            {contactUs}
          </Link>
          <Link
            to={clientReviewsLink}
            className="text-md font-medium text-gray-900 px-3 hover:text-gray-800 md:text-sm lg:text-base"
          >
            {clientReviews}
          </Link>
          {activeDoc ? <LanguageToggle activeDocMeta={activeDoc} /> : ""}
        </div>
      </div>
      <div className="flex justify-between px-4 py-4 border-b-gray-200 border border-t-0 border-r-0 border-l-0 sm:px-6 md:space-x-10 md:flex-col md:justify-start xl:flex-row xl:items-start 2xl:justify-between 2xl:items-center">
        <div className=" w-4/12 sm:w-2/12 lg:w-auto">
          <Link to={headerLink} className="flex">
            <span className="sr-only">Markavo</span>
            <img className="mb-0" src={headerLogo} width={202} alt="Markavo" />
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between xl:-left-4 2xl:left-0">
          <Popover.Group
            as="nav"
            className="flex space-x-4 items-center w-full md:justify-end xl:justify-between"
          >
            <div className="flex">
              <Popover className="">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-900",
                        "group inline-flex items-center text-md font-medium text-gray-900 hover:text-gray-800 focus:outline-none md:mr-2 md:text-sm lg:mr-6 lg:text-base"
                      )}
                    >
                      <span>{serviceTitle}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-900",
                          "group-hover:text-gray-500 md:h-4 md:w-4 md:ml-0 mt-1 md:mt-0 lg:h-5 lg:w-5 lg:ml-1"
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
                      <Popover.Panel className="absolute z-10 mt-3 transform w-full left-0">
                        <div className="rounded-b-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2 xl:grid-cols-4 ">
                            {services.map((item, i) => (
                              <Link
                                key={i}
                                to={item.link.url ? item.link.url : "#"}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
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
                        "group inline-flex items-center text-md font-medium text-gray-900 hover:text-gray-800 focus:outline-none md:text-sm md:mr-2 lg:mr-6 lg:text-base"
                      )}
                    >
                      <span>{brandingTitle}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-900",
                          "mt-1 md:ml-0 group-hover:text-gray-500 md:mt-0 md:h-4 md:w-4 lg:ml-1 lg:h-5 lg:w-5"
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
                      <Popover.Panel className="absolute z-10 left-0 transform -translate-x-0 mt-3 px-2 max-w-xs sm:px-0 md:w-large lg:w-Xlarge">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-4 bg-white px-5 py-6 sm:gap-4 sm:p-8">
                            {brandingTools.map((item, i) => (
                              <Link
                                key={i}
                                to={item.link.url ? item.link.url : "#"}
                                className="-m-3 mb-0 p-3 block rounded-md hover:bg-gray-50"
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
                to={aboutLink}
                className="mr-0 text-md font-medium text-gray-900 hover:text-gray-800 md:text-sm md:pt-xs lg:mr-3 lg:pt-0 lg:text-base"
              >
                {aboutUs}
              </Link>
            </div>
            <div className="max-w-none w-auto lg:max-w-xs">
              <div className="relative">
                <Link
                  to={freeTrademarkLink}
                  className="inline-flex items-center justify-center px-3 py-1.2 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 md:text-xs lg:text-sm"
                >
                  <span>{freeTrademark}</span>
                  <SearchIcon
                    className="ml-2 md:h-3 md:w-3 lg:h-4 lg:w-4"
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
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-10 md:hidden"
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
                      <div className="ml-4 text-sm font-medium text-gray-900">
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
                  to={clientReviewsLink}
                  className="text-sm font-medium text-gray-900 hover:text-gray-800"
                >
                  {clientReviews}
                </Link>
                <Link
                  to={aboutLink}
                  className="text-sm font-medium text-gray-900 hover:text-gray-800"
                >
                  {aboutUs}
                </Link>
                <Link
                  to={freeTrademarkLink}
                  className="text-sm font-medium text-gray-900 hover:text-gray-800"
                >
                  {freeTrademark}
                </Link>
              </div>
              <div className="mt-12">
                {activeDoc ? (
                  <div className="pb-6 text-center text-sm font-medium text-gray-900">
                    <LanguageToggle activeDocMeta={activeDoc} />
                  </div>
                ) : (
                  ""
                )}
                <Link
                  to={contactUsLink}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400"
                >
                  {contactUs}
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
