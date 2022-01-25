import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

const Pagination = ({
  currentPage,
  pages,
  setCurrentPage
}) => {
  function goToNextPage() {
    setCurrentPage(page => page + 1)
  }

  function goToPreviousPage() {
    setCurrentPage(page => page - 1)
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent)
    setCurrentPage(pageNumber)
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / 5) * 5
    return new Array(5).fill().map((_, idx) => start + idx + 1)
  }

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden font-sans">
        <Link
          to="#"
          className="relative inline-flex items-center px-4 py-2 ml-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </Link>
        <Link
          to="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 mr-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-sans text-gray-500 py-3 mb-0">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px font-sans"
            aria-label="Pagination"
          >
            <button
              onClick={goToPreviousPage}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              disabled={currentPage === 1 ? true : false}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* show page numbers */}
            {getPaginationGroup().map((item, index) => {
              console.log(item);
              return (
                <button
                  key={index}
                  onClick={changePage}
                  className={currentPage === item ?
                    `bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium`
                    :
                    `bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium`
                  }
                >
                  <span>{item}</span>
                </button>
              )
            })}

            <button
              onClick={goToNextPage}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              disabled={currentPage === pages ? true : false}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
