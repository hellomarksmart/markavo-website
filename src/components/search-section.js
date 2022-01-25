import * as React from "react"
import { useState } from "react"
import api from "../../api/api"
import Pagination from "../components/pagination-section"

const BannerContent = [
  {
    heading: "Data to enrich your",
    headingColored: "online business",
    description:
      "Search millions of trademarks that are live or pending with the USPTO",
  },
]

const SearchSection = ({ heading, headingColored, description }) => {
  const [keyword, setKeyword] = useState("")
  let [responseData, setResponseData] = React.useState("")
  let [responseLength, setResponseLength] = React.useState("")

  const fetchData = e => {
    e.preventDefault()
    api
      .getData(keyword)
      .then(response => {
        setResponseData(response.data)
        setResponseLength(response.data.items.length)
      })
      .catch(error => {
        console.log(error)
      })
  }

  console.log(responseData.items)

  const pages = Math.round(responseLength / 10)
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = currentPage * 10 - 10
  const endIndex = startIndex + 10

  return (
    <div className="relative overflow-hidden">
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

      <div className="relative pt-6 pb-16 sm:pb-24">
        <div className="text-center">
          <div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">{heading}</span>{" "}
              <span className="block text-emerald-400 xl:inline">
                {headingColored}
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {description}
            </p>
          </div>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="relative">
              <div className="absolute top-4 left-3">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-emerald-400"
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
                type="text"
                className="shadow h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                placeholder="Search millions of trademarks"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
              />
              <div className="absolute top-2 right-2">
                {" "}
                <button
                  onClick={fetchData}
                  className="h-10 w-20 text-white rounded-lg bg-emerald-400 hover:bg-emerald-500"
                >
                  Search
                </button>{" "}
              </div>
            </div>
          </div>
          {responseData.items && (
            <div className="text-left px-12 my-12">
              <p className="text-2xl font-bold mb-2">
                Trademark Search Results
              </p>
              <p>
                <b className="text-emerald-500">{keyword}</b> may be available
                if it is not generic, descriptive, too confusingly similar to
                another unregistered trademark that is being used in commerce,
                or too confunsingly similar a live registered trademark.
                <b className="text-emerald-500">
                  Work with Markavo to navigate this complicated legal process
                  for as little as $185.
                </b>
              </p>
              {responseData.items.slice(startIndex, endIndex).map((item, i) => {
                const formatter = new Intl.DateTimeFormat("eng", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })
                const newDate = formatter.format(new Date(item.filing_date))
                // const fileMonth = newDate.getMonth().toString()
                // const fileDay = newDate.getDate().toString()
                // const fileYear = newDate.getFullYear().toString()

                return (
                  <div
                    key={i}
                    className="my-3 p-8 border border-slate-200 max-w-screen-md"
                  >
                    <p className="text-emerald-500 font-bold">{item.keyword}</p>
                    <div className="flex items-center">
                      <p className="mr-2 mb-0 text-slate-400">Filed:</p>
                      {/* <p className="mb-0 text-slate-400">{fileMonth} {fileDay}, {fileYear}</p> */}
                      <p className="mb-0 text-slate-400">{newDate}</p>
                    </div>
                    <p className="truncate my-1">{item.description}</p>
                    <div className="flex items-center">
                      <p className="mr-2 mb-0 font-bold">Owned by:</p>
                      {item.owners.map((owner, i) => {
                        return (
                          <p key={i} className="mb-0 text-emerald-500">
                            {owner.name}
                          </p>
                        )
                      })}
                    </div>
                    <div className="flex items-center">
                      <p className="mr-2 mb-0 font-bold">Serial Number:</p>
                      <p className="mb-0 text-emerald-500">
                        {item.serial_number}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
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
        </div>
      </div>
    </div>
  )
}

export default SearchSection
