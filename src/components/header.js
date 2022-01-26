import React, { Fragment } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import {
  ChartBarIcon,
  PlayIcon,
  PhoneIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline"
import { SearchIcon } from "@heroicons/react/solid"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Header = () => {
  const headerData = useStaticQuery(graphql`
    query MyQuery {
      prismicHeader {
        data {
          phone_number {
            text
          }
          header_logo {
            url
          }
          services {
            name {
              text
            }
            link {
              uid
            }
            icon {
              url
            }
            description {
              text
            }
          }
          all_services {
            name {
              text
            }
            link {
              uid
            }
            icon {
              url
            }
          }
          branding_tools {
            name {
              text
            }
            link {
              uid
            }
            description {
              text
            }
          }
        }
      }
    }
  `)

  const headerLogo = headerData.prismicHeader.data.header_logo.url
  const phoneNumber = headerData.prismicHeader.data.phone_number.text
  const services = headerData.prismicHeader.data.services
  const allServices = headerData.prismicHeader.data.all_services
  const brandingTools = headerData.prismicHeader.data.branding_tools

  return (
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-4 border-b-emerald-200 border sm:px-6 md:justify-end md:space-x-10 md:flex sm:hidden hidden">
        <div className="flex space-x-4 items-center md:ml-12">
          <div className="flex px-3">
            <PhoneIcon
              className="h-6 w-6 md:h-5 md:w-5 md:mt-[2px] text-transparent fill-emerald-400"
              aria-hidden="true"
            />
            <Link
              href={`tel:+${phoneNumber}`}
              className="text-md lg:text-base md:text-sm font-semibold text-emerald-400 pl-1 hover:text-emerald-500"
            >
              {phoneNumber}
            </Link>
          </div>
          <Link
            to="/contact-us"
            className="ml-8 inline-flex items-center justify-center px-3 py-[0.32rem] border border-emerald-400 rounded-md shadow-sm lg:text-sm md:text-[15px] font-medium text-emerald-400 bg-white hover:text-white hover:bg-emerald-400"
          >
            Contact Us
          </Link>
          <Link
            to="/markavo-reviews"
            className="text-md lg:text-base md:text-sm font-medium text-emerald-400 px-3 hover:text-emerald-500"
          >
            Client Reviews
          </Link>
          <select
            className="text-sm lg:text-sm md:text-[15px] font-medium text-emerald-400 border border-emerald-400 px-12 py-[0.35rem] rounded-md lg:px-12 md:px-6"
            data-placeholder="English"
          >
            <option value="EN" active="true">
              English
            </option>
            <option value="ES">Spanish</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-4 border-b-emerald-200 border sm:px-6 md:justify-start lg:space-x-10">
        <div className="lg:w-auto sm:w-2/12 w-4/12">
          <Link to="/" className="flex">
            <span className="sr-only">Markvao</span>
            {/* <StaticImage
              src={headerLogo}
              width={202}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Markavo"
            /> */}
            <img className="mb-0" src={headerLogo} width={202} alt="Markavo" />
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                        open ? "text-emerald-400" : "text-emerald-400",
                        "group inline-flex items-center lg:mr-6 md:mr-2 text-md lg:text-base md:text-sm font-medium text-emerald-400 hover:text-emerald-500"
                      )}
                    >
                      <span>Our Services</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-emerald-400" : "text-emerald-400",
                          "lg:ml-1 md:ml-0 mt-1 md:mt-0 lg:h-5 lg:w-5 md:h-4 md:w-4 group-hover:text-emerald-500"
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
                      <Popover.Panel className="absolute z-10  mt-3 transform w-[90%] left-[20px] ">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2 xl:grid-cols-4 ">
                            {services.map((item, i) => (
                              <Link
                                key={i}
                                to={item.link.uid ? item.link.uid : "#"}
                                className="-m-3 p-3  flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-emerald-400 text-white sm:h-12 sm:w-12">
                                  {item.icon.url ? (
                                    <img
                                      src={item.icon.url}
                                      className="h-6 w-6"
                                      alt=""
                                    />
                                  ) : (
                                    <ChartBarIcon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  )}
                                </div>
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-emerald-400 mb-0">
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
                                    onTouchEnd={
                                      item.link.uid ? item.link.uid : "#"
                                    }
                                    className="-m-3 p-3 flex items-center rounded-md text-sm font-medium text-emerald-400 hover:bg-gray-400 transition ease-in-out duration-150"
                                  >
                                    {item.icon.url ? (
                                      <img
                                        src={item.icon.url}
                                        className="flex-shrink-0 h-6 w-6 text-emerald-400"
                                        alt=""
                                      />
                                    ) : (
                                      <PlayIcon
                                        className="flex-shrink-0 h-6 w-6 text-emerald-400"
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
                        open ? "text-emerald-400" : "text-emerald-400",
                        "group inline-flex items-center lg:mr-6 md:mr-2 text-md lg:text-base md:text-sm font-medium text-emerald-400 hover:text-emerald-500"
                      )}
                    >
                      <span>Branding Tools</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-emerald-400",
                          "lg:ml-1 md:ml-0 mt-1 md:mt-0 lg:h-5 lg:w-5 md:h-4 md:w-4 group-hover:text-emerald-500"
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
                      <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-4 bg-white px-5 py-6 sm:gap-4 sm:p-8">
                            {brandingTools.map((item, i) => (
                              <Link
                                key={i}
                                to={item.link.uid ? item.link.uid : "#"}
                                className="-m-3 mb-0 p-3  block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-sm font-medium text-emerald-400 mb-0">
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
                className="lg:mr-3 mr-0 text-md lg:text-base md:text-sm font-medium text-emerald-400 hover:text-emerald-500 lg:pt-0 md:pt-[3px]"
              >
                About Us
              </Link>
            </div>
            <div className="max-w-none w-auto lg:max-w-xs">
              <div className="relative">
                <Link
                  to="/free-trademark-search"
                  className="inline-flex items-center justify-center px-3 py-[0.32rem] border border-emerald-400 rounded-md shadow-sm text-sm lg:text-sm md:text-xs font-medium text-emerald-400 bg-white hover:text-white hover:bg-emerald-400"
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
                  {/* <StaticImage
                    src="../images/markavo-logo.png"
                    width={202}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Markavo"
                  /> */}
                  <img
                    className="mb-0"
                    src={headerLogo}
                    width={202}
                    alt="Markavo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                      to={item.link.uid ? item.link.uid : "#"}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-emerald-400 text-white">
                        {item.icon.url ? (
                          <img src={item.icon.url} className="h-6 w-6" alt="" />
                        ) : (
                          <ChartBarIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div className="ml-4 text-sm  font-medium text-emerald-400">
                        {item.name.text ? item.name.text : ""}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/markavo-reviews"
                  className="text-sm  font-medium text-emerald-400 hover:text-emerald-500"
                >
                  Client Reviews
                </Link>
                <Link
                  to="/about-us"
                  className="text-sm  font-medium text-emerald-400 hover:text-emerald-500"
                >
                  About Us
                </Link>
                <Link
                  to="/free-trademark-search"
                  className="text-sm  font-medium text-emerald-400 hover:text-emerald-500"
                >
                  Free Trademark Search
                </Link>

                {allServices.map((item, i) => (
                  <Link
                    key={i}
                    onTouchEnd={item.link.uid ? item.link.uid : "#"}
                    className="text-sm  font-medium text-emerald-400 hover:text-emerald-500"
                  >
                    {item.name.text ? item.name.text : ""}
                  </Link>
                ))}
                {brandingTools.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link.uid ? item.link.uid : "#"}
                    className="text-sm  font-medium text-emerald-400 hover:text-emerald-500"
                  >
                    {item.name.text ? item.name.text : ""}
                  </Link>
                ))}
              </div>
              <div className="mt-12">
                <div className="pb-6 text-center text-sm font-medium text-emerald-400">
                  <select
                    className="w-full  text-sm font-medium text-emerald-400 px-4 py-2 border border-emerald-400 rounded-md shadow-sm"
                    data-placeholder="English"
                  >
                    <option value="EN" active="true">
                      English
                    </option>
                    <option value="ES">Spanish</option>
                  </select>
                </div>
                <Link
                  to="/contact-us"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm  font-medium text-white bg-emerald-400 hover:bg-emerald-500"
                >
                  Contact Us
                </Link>
                <div className="flex justify-center px-3 mt-6">
                  <PhoneIcon
                    className="h-6 w-6 text-transparent fill-emerald-400"
                    aria-hidden="true"
                  />
                  <Link
                    href={`tel:+${phoneNumber}`}
                    className="text-md text-center  font-semibold text-emerald-400 pl-1 hover:text-emerald-500"
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
