import React, { useState } from "react"
import { Link } from "gatsby"
import api from "../../../api/api"
import Pagination from "../Reusable Components/pagination-section"
import loadingGIF from "../../images/Icons/Spinner-1s-200px.gif"

const SearchSection = ({ heading, headingColored, description, searchResultDesc, coloredSearchResultDesc, coloredSearchResultLink }) => {
  const [keyword, setKeyword] = useState("")
  let [responseData, setResponseData] = useState("")
  let [responseLength, setResponseLength] = useState("")
  const [loading, setLoading] = useState(false)
  const [serial, setSerial] = useState(true)
  const [serialSearch, setSerialSearch] = useState(false)
  const [activeItem, setActiveItem] = useState("")

  const getActiveItem = serial_number => {
    setActiveItem(serial_number)
    setSerialSearch(!serialSearch)
  }

  const fetchData = e => {
    if (e.keyCode >= 0) {
      setSerial(false)
    }
    setActiveItem("")
    if (!isNaN(keyword)) {
      e.preventDefault()
      setSerialSearch(false)
      setLoading(true)
      api
        .getSearchSerial(keyword)
        .then(response => {
          setResponseData(response.data)
          setResponseLength(response.data.items.length)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(response => {
          setLoading(false)
        })
    } else {
      e.preventDefault()
      setSerialSearch(false)
      setLoading(true)
      api
        .getSearchName(keyword)
        .then(response => {
          setResponseData(response.data)
          setResponseLength(response.data.items.length)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(response => {
          setLoading(false)
        })
    }
  }

  const onKeyPress = e => {
    if (e.keyCode >= 0) {
      setSerial(false)
    }
    setActiveItem("")
    if (e.key === "Enter") {
      if (!isNaN(e.target.value)) {
        e.preventDefault()
        setSerialSearch(false)
        setLoading(true)
        api
          .getSearchSerial(keyword)
          .then(response => {
            setResponseData(response.data)
            setResponseLength(response.data.items.length)
          })
          .catch(error => {
            console.log(error)
          })
          .finally(response => {
            setLoading(false)
          })
      } else {
        e.preventDefault()
        setSerialSearch(false)
        setLoading(true)

        api
          .getSearchName(keyword)
          .then(response => {
            setResponseData(response.data)
            setResponseLength(response.data.items.length)
          })
          .catch(error => {
            console.log(error)
          })
          .finally(response => {
            setLoading(false)
          })
      }
    }
  }

  const pages = Math.round(responseLength / 10)
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = currentPage * 10 - 10
  const endIndex = startIndex + 10

  return (
    <div className="relative overflow-hidden z-30">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div className="relative pt-16 pb-16 sm:pb-16">
        <div className="text-center">
          <div className="max-w-default mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5.5xl">
              <span className="block xl:inline">{heading}</span>{" "}
              <span className="block text-emerald-400 xl:inline">
                {headingColored}
              </span>
            </h1>
            <p className="mt-3 max-w-sm mx-auto text-base text-gray-500 sm:max-w-md sm:text-lg md:mt-5 md:text-lg md:max-w-xl">
              {description}
            </p>
          </div>
          <div className="mt-5 max-w-medium sm:max-w-sm mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="relative hidden md:block">
              <div className="absolute top-4 left-3">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mt-0 sm:h-6 sm:w-6 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>{" "}
              </div>{" "}
              <input
                id="searchInput"
                type="text"
                className="shadow h-12 sm:h-14 sm:h-14 w-64 sm:w-96 pl-10 pr-20 rounded-lg z-0 text-sm sm:text-base focus:shadow focus:outline-none"
                value={keyword}
                name="input"
                placeholder="Search millions of trademarks."
                onChange={e => setKeyword(e.target.value)}
                onKeyPress={onKeyPress}
              />
              <div className="absolute top-2 right-2">
                {loading ? (
                  <button
                    onClick={fetchData}
                    className="mt-0 h-8 pl-2 sm:h-10 w-24 sm:w-28 text-white text-xs sm:text-base rounded-lg bg-emerald-400 hover:bg-emerald-500 flex justify-center items-center"
                  >
                    Search
                    <img
                      src={loadingGIF}
                      alt="Search Spinner"
                      className="w-7 sm:w-9 m-0"
                    />
                  </button>
                ) : (
                  <button
                    onClick={fetchData}
                    className="mt-0 h-8 sm:h-10 w-16 sm:w-24 text-white text-xs sm:text-base rounded-lg bg-emerald-400 hover:bg-emerald-500"
                  >
                    Search
                  </button>
                )}
              </div>
            </div>

            <div className="relative block md:hidden">
              <div className="absolute top-4 left-3">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mt-0 sm:h-6 sm:w-6 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>{" "}
              </div>{" "}
              <input
                id="searchInput"
                type="text"
                className="shadow h-12 sm:h-14 sm:h-14 w-64 sm:w-96 pl-10 pr-20 rounded-lg z-0 text-sm sm:text-base focus:shadow focus:outline-none"
                value={keyword}
                name="input"
                placeholder="Search trademarks."
                onChange={e => setKeyword(e.target.value)}
                onKeyPress={onKeyPress}
              />
              <div className="absolute top-2 right-2">
                {loading ? (
                  <button
                    onClick={fetchData}
                    className="mt-0 h-8 pl-2 sm:h-10 w-24 sm:w-28 text-white text-xs sm:text-base rounded-lg bg-emerald-400 hover:bg-emerald-500 flex justify-center items-center"
                  >
                    Search
                    <img
                      src={loadingGIF}
                      alt="Search Spinner"
                      className="w-7 sm:w-9 m-0"
                    />
                  </button>
                ) : (
                  <button
                    onClick={fetchData}
                    className="mt-0 h-8 sm:h-10 w-16 sm:w-24 text-white text-xs sm:text-base rounded-lg bg-emerald-400 hover:bg-emerald-500"
                  >
                    Search
                  </button>
                )}
              </div>
            </div>
          </div>
          {!isNaN(keyword) ? (
            <>
              {responseData.items && (
                <>
                  {responseData.items.length !== 0 ? (
                    <div className="text-left px-12 my-12 max-w-default mx-auto px-4 sm:px-6 lg:px-8">
                      <p className="text-2xl font-bold mb-2">
                        Trademark Results
                      </p>
                      {serial ? (
                        <p>
                          <b className="text-emerald-500">{keyword}</b>
                          {searchResultDesc}
                          <Link
                            to={coloredSearchResultLink}
                            className="text-sm font-medium text-emerald-500 hover:text-emerald-800"
                          >
                            {coloredSearchResultDesc}
                          </Link>
                        </p>
                      ) : (
                        ""
                      )}
                      <div className="sm:w-full md:w-5/6">
                        {responseData.items
                          .slice(startIndex, endIndex)
                          .map((item, i) => {
                            const formatter = new Intl.DateTimeFormat("eng", {
                              month: "long",
                              day: "2-digit",
                              year: "numeric",
                            })
                            const newDate = formatter.format(
                              new Date(item.filing_date)
                            )

                            return (
                              <div key={i} className="my-3 pt-10 bg-white">
                                <div className="mb-0 border border-gray-300 w-24 rounded-lg w-28 h-28">
                                  <img
                                    className="my-9 rounded-lg"
                                    src={
                                      "https://tsdr.uspto.gov/img/" +
                                      item.serial_number +
                                      "/large"
                                    }
                                    width="100%"
                                    height="100%"
                                    alt="Markavo"
                                  />
                                </div>
                                <p className="text-emerald-500 font-bold mt-3 text-2.5xl sm:text-3.5xl lg:text-4.5xl">
                                  {item.keyword}
                                </p>
                                <div className="flex flex-col md:flex-row items-start border-b border-gray-300 pb-8">
                                  <div className="space-y-4 w-full md:w-2/5">
                                    <div>
                                      <p className="mr-2 mb-0 font-bold">
                                        Filing Date
                                      </p>
                                      <p className="mb-0 text-emerald-500">
                                        {newDate}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="mr-2 mb-0 font-bold">
                                        Serial Number
                                      </p>
                                      <p className="mb-0 text-emerald-500">
                                        {item.serial_number}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="mr-2 mb-0 font-bold">
                                        Goods and Services
                                      </p>
                                      <p className="mb-0 text-emerald-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="space-y-4 w-full md:w-2/5 pt-4 md:pt-0 pl-0 md:pl-20">
                                    <div>
                                      <p className="mr-2 mb-0 font-bold">
                                        Registration Date
                                      </p>
                                      <p className="mb-0 text-emerald-500">
                                        {item.registration_date}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="mr-2 mb-0 font-bold">
                                        Registration Number
                                      </p>
                                      <p className="mb-0 text-emerald-500">
                                        {item.registration_number}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="mr-2 mb-0 font-bold">
                                        Status Code
                                      </p>
                                      <p className="mb-0 text-emerald-500">
                                        {item.status_code}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="pt-8">
                                  <p className="mr-2 mb-0 font-bold text-2.5xl">
                                    Owner
                                  </p>
                                  <div className="space-y-4 w-full sm:w-4/5 lg:w-3/5 2xl:w-3/5">
                                    <div className="pt-3 flex items-left sm:items-center flex-col sm:flex-row">
                                      <p className="mr-2 mb-0 font-bold w-2/4">
                                        Name
                                      </p>
                                      {item.owners.map((owner, i) => {
                                        return (
                                          <p
                                            key={i}
                                            className="mb-0 text-emerald-500"
                                          >
                                            {owner.name}
                                          </p>
                                        )
                                      })}
                                    </div>
                                    <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                      <p className="mr-2 mb-0 font-bold w-2/4">
                                        Address 1
                                      </p>
                                      {item.owners.map((owner, i) => {
                                        return (
                                          <p
                                            key={i}
                                            className="mb-0 text-emerald-500"
                                          >
                                            {owner.address1
                                              ? owner.address1
                                              : "-"}
                                          </p>
                                        )
                                      })}
                                    </div>
                                    <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                      <p className="mr-2 mb-0 font-bold w-2/4">
                                        Address 2
                                      </p>
                                      {item.owners.map((owner, i) => {
                                        return (
                                          <p
                                            key={i}
                                            className="mb-0 text-emerald-500"
                                          >
                                            {owner.address2
                                              ? owner.address2
                                              : "-"}
                                          </p>
                                        )
                                      })}
                                    </div>
                                    <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                      <p className="mr-2 mb-0 font-bold w-2/4">
                                        City
                                      </p>
                                      {item.owners.map((owner, i) => {
                                        return (
                                          <p
                                            key={i}
                                            className="mb-0 text-emerald-500"
                                          >
                                            {owner.city}
                                          </p>
                                        )
                                      })}
                                    </div>
                                    <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                      <p className="mr-2 mb-0 font-bold w-2/4">
                                        State
                                      </p>
                                      {item.owners.map((owner, i) => {
                                        return (
                                          <p
                                            key={i}
                                            className="mb-0 text-emerald-500"
                                          >
                                            {owner.state}
                                          </p>
                                        )
                                      })}
                                    </div>
                                    <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                      <p className="mr-2 mb-0 font-bold w-2/4">
                                        Country
                                      </p>
                                      {item.owners.map((owner, i) => {
                                        return (
                                          <p
                                            key={i}
                                            className="mb-0 text-emerald-500"
                                          >
                                            {owner.country}
                                          </p>
                                        )
                                      })}
                                    </div>
                                    <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                      <p className="mr-2 mb-0 font-bold w-2/4">
                                        Postcode
                                      </p>
                                      {item.owners.map((owner, i) => {
                                        return (
                                          <p
                                            key={i}
                                            className="mb-0 text-emerald-500"
                                          >
                                            {owner.postcode}
                                          </p>
                                        )
                                      })}
                                    </div>
                                    <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                      <p className="mr-2 mb-0 font-bold w-2/4">
                                        Legal Entity Type
                                      </p>
                                      {item.owners.map((owner, i) => {
                                        return (
                                          <p
                                            key={i}
                                            className="mb-0 text-emerald-500"
                                          >
                                            {owner.legal_entity_type_label}
                                          </p>
                                        )
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="pt-8">
                        No results, please try another keyword/serial number.
                      </p>
                    </div>
                  )}
                </>
              )}
              {responseLength > 9 ? (
                <Pagination
                  currentPage={currentPage}
                  pages={pages}
                  totalItems={responseLength}
                  setCurrentPage={setCurrentPage}
                />
              ) : (
                ""
              )}
            </>
          ) : (
            <>
              {responseData.items && (
                <>
                  {responseData.items.length !== 0 ? (
                    <div className="text-left px-12 my-12 max-w-default mx-auto px-4 sm:px-6 lg:px-8">
                      <p className="text-2xl font-bold mb-2">
                        Trademark Search Results
                      </p>
                      <p>
                        <b className="text-emerald-500">{keyword} </b>
                        {searchResultDesc}
                        <Link
                          to={coloredSearchResultLink}
                          className="text-sm font-medium text-emerald-500 hover:text-emerald-800 no-underline"
                        >
                          {coloredSearchResultDesc}
                        </Link>
                      </p>
                      <div className={
                        serialSearch ? "w-6/6 md:w-5/6"
                          : "w-6/6 md:w-3/6"
                      }
                      >
                        {responseData.items
                          .slice(startIndex, endIndex)
                          .map((item, i) => {
                            const formatter = new Intl.DateTimeFormat("eng", {
                              month: "long",
                              day: "2-digit",
                              year: "numeric",
                            })
                            const newDate = formatter.format(
                              new Date(item.filing_date)
                            )

                            return (
                              <div
                                className={
                                  serialSearch ?
                                    activeItem === item.serial_number ?
                                      "block"
                                      : "hidden"
                                    : "block"
                                }
                              >
                                <div
                                  key={i}
                                  className={
                                    activeItem === item.serial_number
                                      ? ""
                                      : "my-3 p-8 bg-white border border-slate-200"
                                  }
                                >
                                  {activeItem === item.serial_number ? (
                                    <div className="mb-0 border border-gray-300 w-24 rounded-lg w-28 h-28">
                                      <img
                                        className="my-9 rounded-lg"
                                        src={
                                          "https://tsdr.uspto.gov/img/" +
                                          item.serial_number +
                                          "/large"
                                        }
                                        width="100%"
                                        height="100%"
                                        alt="Markavo"
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <button
                                    onClick={() => getActiveItem(item.serial_number)}
                                    data-pg={item.serial_number}
                                    className="text-emerald-500 font-bold mt-3 text-2.5xl sm:text-3.5xl lg:text-4.5xl"
                                  >
                                    {item.keyword}
                                  </button>
                                  {activeItem === item.serial_number ? (
                                    <>
                                      <div className="flex flex-col md:flex-row items-start border-b border-gray-300 pb-8">
                                        <div className="space-y-4 w-full md:w-2/5">
                                          <div>
                                            <p className="mr-2 mb-0 font-bold">
                                              Filing Date
                                            </p>
                                            <p className="mb-0 text-emerald-500">
                                              {newDate}
                                            </p>
                                          </div>
                                          <div>
                                            <p className="mr-2 mb-0 font-bold">
                                              Serial Number
                                            </p>
                                            <p className="mb-0 text-emerald-500">
                                              {item.serial_number}
                                            </p>
                                          </div>
                                          <div>
                                            <p className="mr-2 mb-0 font-bold">
                                              Goods and Services
                                            </p>
                                            <p className="mb-0 text-emerald-500">
                                              {item.description}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="space-y-4 w-full md:w-2/5 pt-4 md:pt-0 pl-0 md:pl-20">
                                          <div>
                                            <p className="mr-2 mb-0 font-bold">
                                              Registration Date
                                            </p>
                                            <p className="mb-0 text-emerald-500">
                                              {item.registration_date}
                                            </p>
                                          </div>
                                          <div>
                                            <p className="mr-2 mb-0 font-bold">
                                              Registration Number
                                            </p>
                                            <p className="mb-0 text-emerald-500">
                                              {item.registration_number}
                                            </p>
                                          </div>
                                          <div>
                                            <p className="mr-2 mb-0 font-bold">
                                              Status Code
                                            </p>
                                            <p className="mb-0 text-emerald-500">
                                              {item.status_code}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="pt-8">
                                        <p className="mr-2 mb-0 font-bold text-2.5xl">
                                          Owner
                                        </p>
                                        <div className="space-y-4 w-full sm:w-4/5 lg:w-3/5 2xl:w-3/5">
                                          <div className="pt-3 flex items-left sm:items-center flex-col sm:flex-row">
                                            <p className="mr-2 mb-0 font-bold w-2/4">
                                              Name
                                            </p>
                                            {item.owners.map((owner, i) => {
                                              return (
                                                <p
                                                  key={i}
                                                  className="mb-0 text-emerald-500"
                                                >
                                                  {owner.name}
                                                </p>
                                              )
                                            })}
                                          </div>
                                          <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                            <p className="mr-2 mb-0 font-bold w-2/4">
                                              Address 1
                                            </p>
                                            {item.owners.map((owner, i) => {
                                              return (
                                                <p
                                                  key={i}
                                                  className="mb-0 text-emerald-500"
                                                >
                                                  {owner.address1
                                                    ? owner.address1
                                                    : "-"}
                                                </p>
                                              )
                                            })}
                                          </div>
                                          <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                            <p className="mr-2 mb-0 font-bold w-2/4">
                                              Address 2
                                            </p>
                                            {item.owners.map((owner, i) => {
                                              return (
                                                <p
                                                  key={i}
                                                  className="mb-0 text-emerald-500"
                                                >
                                                  {owner.address2
                                                    ? owner.address2
                                                    : "-"}
                                                </p>
                                              )
                                            })}
                                          </div>
                                          <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                            <p className="mr-2 mb-0 font-bold w-2/4">
                                              City
                                            </p>
                                            {item.owners.map((owner, i) => {
                                              return (
                                                <p
                                                  key={i}
                                                  className="mb-0 text-emerald-500"
                                                >
                                                  {owner.city}
                                                </p>
                                              )
                                            })}
                                          </div>
                                          <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                            <p className="mr-2 mb-0 font-bold w-2/4">
                                              State
                                            </p>
                                            {item.owners.map((owner, i) => {
                                              return (
                                                <p
                                                  key={i}
                                                  className="mb-0 text-emerald-500"
                                                >
                                                  {owner.state}
                                                </p>
                                              )
                                            })}
                                          </div>
                                          <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                            <p className="mr-2 mb-0 font-bold w-2/4">
                                              Country
                                            </p>
                                            {item.owners.map((owner, i) => {
                                              return (
                                                <p
                                                  key={i}
                                                  className="mb-0 text-emerald-500"
                                                >
                                                  {owner.country}
                                                </p>
                                              )
                                            })}
                                          </div>
                                          <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                            <p className="mr-2 mb-0 font-bold w-2/4">
                                              Postcode
                                            </p>
                                            {item.owners.map((owner, i) => {
                                              return (
                                                <p
                                                  key={i}
                                                  className="mb-0 text-emerald-500"
                                                >
                                                  {owner.postcode}
                                                </p>
                                              )
                                            })}
                                          </div>
                                          <div className="flex items-left sm:items-center flex-col sm:flex-row">
                                            <p className="mr-2 mb-0 font-bold w-2/4">
                                              Legal Entity Type
                                            </p>
                                            {item.owners.map((owner, i) => {
                                              return (
                                                <p
                                                  key={i}
                                                  className="mb-0 text-emerald-500"
                                                >
                                                  {
                                                    owner.legal_entity_type_label
                                                  }
                                                </p>
                                              )
                                            })}
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:mb-0 mb-3">
                                        <p className="mr-2 mb-0 text-slate-400">
                                          Filed:
                                        </p>
                                        <p className="mb-0 text-slate-400">
                                          {newDate}
                                        </p>
                                      </div>
                                      <p className="truncate my-1">
                                        {item.status_label}
                                      </p>
                                      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:mb-0 mb-3">
                                        <p className="mr-2 mb-0 font-bold">
                                          Owned by:
                                        </p>
                                        {item.owners.map((owner, i) => {
                                          return (
                                            <p
                                              key={i}
                                              className="mb-0 text-emerald-500"
                                            >
                                              {owner.name}
                                            </p>
                                          )
                                        })}
                                      </div>
                                      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:mb-0 mb-3">
                                        <p className="mr-2 mb-0 font-bold">
                                          Serial Number:
                                        </p>
                                        <button
                                          onClick={() => getActiveItem(item.serial_number)}
                                          data-pg={item.serial_number}
                                          className="mb-0 text-emerald-500"
                                        >
                                          {item.serial_number}
                                        </button>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="pt-8">
                        No results, please try another keyword/serial number.
                      </p>
                    </div>
                  )}
                </>
              )}
              {serialSearch === false ? (
                responseLength > 9 ? (
                  <Pagination
                    currentPage={currentPage}
                    pages={pages}
                    totalItems={responseLength}
                    setCurrentPage={setCurrentPage}
                  />
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </div>
    </div >
  )
}

export default SearchSection
