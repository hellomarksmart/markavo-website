import React, { Fragment } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Popover, Transition } from "@headlessui/react"
import {
  ChartBarIcon,
  PlayIcon,
  CheckCircleIcon,
  PhoneIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline"
import { SearchIcon } from "@heroicons/react/solid"

const services = [
  {
    name: "New Trademark Applications",
    description: "Register brand names, logos, and taglines.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Office Action Responses",
    description: "Get assistance overcoming trademark refusals.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Statements of Use",
    description: "Prove that you are using your trademark in commerce.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Trademark Renewals",
    description: "Keep your registration up to date and in good standing.",
    href: "#",
    icon: ChartBarIcon,
  },
]

const allServices = [
  { name: "All Services - Applications", href: "#", icon: PlayIcon },
  { name: "All Services - Registrations", href: "#", icon: CheckCircleIcon },
  { name: "All Services - Disputes", href: "#", icon: PhoneIcon },
]

const brandingTools = [
  {
    name: "Naming Contests",
    description:
      "Get hundreds of crowdsourced trademark ideas in just a few days.",
    href: "#",
  },
  {
    name: "Logo Design Contests",
    description:
      "Receive eye-catching logos from talented artists and use only your favourite design.",
    href: "#",
  },
  {
    name: "Premium Domain Marketplace",
    description:
      "Select from the best names on the web to build an amazing brand quickly.",
    href: "#",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Header = () => {
  return (
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-2 border-b-emerald-400 border sm:px-6 md:justify-end md:space-x-10">
        <div className="flex space-x-4 items-center md:ml-12">
          <Link
            to="tel 1-877-286-5731"
            className="text-sm font-medium text-emerald-400 hover:text-emerald-500"
          >
            1-877-286-5731
          </Link>
          <Link
            to="#"
            className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-emerald-400 rounded-md shadow-sm text-sm font-medium text-emerald-400 bg-white hover:text-white hover:bg-emerald-400"
          >
            Contact Us
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-emerald-400 hover:text-emerald-500"
          >
            Client Reviews
          </Link>
          <select
            className="text-sm font-medium text-emerald-400 border border-emerald-400 px-4 py-2 rounded-md"
            data-placeholder="English"
          >
            <option value="EN" active>
              English
            </option>
            <option value="ES">Spanish</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-2 border-b-emerald-400 border sm:px-6 md:justify-start md:space-x-10">
        <div>
          <Link to="#" className="flex">
            <span className="sr-only">Workflow</span>
            <StaticImage
              src="../images/markavo-logo.png"
              width={250}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Markavo"
            />
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
            className="flex space-x-4 items-center justify-between w-full"
          >
            <div>
              <Link
                to="#"
                className="mr-3 text-sm font-medium text-emerald-400 hover:text-emerald-500"
              >
                Our Services
              </Link>
              <Link
                to="#"
                className="mr-3 text-sm font-medium text-emerald-400 hover:text-emerald-500"
              >
                Branding Tools
              </Link>
              <Link
                to="#"
                className="mr-3 text-sm font-medium text-emerald-400 hover:text-emerald-500"
              >
                About Us
              </Link>
            </div>
            <div className="max-w-lg w-1/2 lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon
                    className="h-5 w-5 text-emerald-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-emerald-400 rounded-md leading-5 bg-tranparent text-emerald-500 placeholder-emerald-200 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-white focus:text-emerald-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
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
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="logo/markavo-logo.png"
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
                  {services.map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-emerald-400 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-sm font-medium text-emerald-400">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="#"
                  className="text-sm font-medium text-emerald-400 hover:text-emerald-500"
                >
                  Client Reviews
                </Link>
                <Link
                  to="#"
                  className="text-sm font-medium text-emerald-400 hover:text-emerald-500"
                >
                  About Us
                </Link>
                <Link
                  to="#"
                  className="text-sm font-medium text-emerald-400 hover:text-emerald-500"
                >
                  Free Trademark
                </Link>

                {allServices.map(item => (
                  <Link
                    onTouchEnd={item.href}
                    className="text-sm font-medium text-emerald-400 hover:text-emerald-500"
                  >
                    {item.name}
                  </Link>
                ))}

                {brandingTools.map(item => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-medium text-emerald-400 hover:text-emerald-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <div className="pb-6 text-center text-sm font-medium text-emerald-400">
                  <select
                    className="text-sm font-medium text-emerald-400"
                    data-placeholder="English"
                  >
                    <option value="EN" active>
                      English
                    </option>
                    <option value="ES">Spanish</option>
                  </select>
                </div>
                <Link
                  to="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-400 hover:bg-emerald-500"
                >
                  Contact Us
                </Link>
                <p className="mt-6 text-center text-sm font-medium text-emerald-400">
                  <Link
                    to="tel 1-877-286-5731"
                    className="text-emerald-400 hover:text-emerald-500"
                  >
                    1-877-286-5731
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
