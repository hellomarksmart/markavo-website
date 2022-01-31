import * as React from "react"
import { Link } from "gatsby"

const Banner = ({
  heading,
  headingColored,
  description,
  buttonColored,
  buttonColoredLink,
  buttonPlain,
  buttonPlainLink,
}) => {
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

      <div className="relative pt-16 pb-16 sm:pb-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-[60px]">
            <span className="block xl:inline">{heading}</span>{" "}
            <span className="block text-emerald-400 xl:inline">
              {headingColored}
            </span>
          </h1>
          <p className="mt-3 max-w-sm mx-auto text-base text-gray-500 sm:max-w-md sm:text-lg md:mt-5 md:text-[20px] md:max-w-[47rem]">
            {description}
          </p>
          <div className="mt-5 sm:max-w-sm mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md">
              {buttonColoredLink ? (
                <Link
                  key={buttonColored}
                  to={buttonColoredLink}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-emerald-400 hover:bg-emerald-500 md:py-[16px] md:text-[18px] md:px-[40px]"
                >
                  {buttonColored}
                </Link>
              ) : (
                <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-emerald-400 hover:bg-emerald-500 md:py-[16px] md:text-[18px] md:px-[40px]">
                  {buttonColored}
                </div>
              )}
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              {buttonPlainLink ? (
                <Link
                  key={buttonPlain}
                  to={buttonPlainLink}
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-900 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 md:py-[16px] md:text-[18px] md:px-[40px]"
                >
                  {buttonPlain}
                </Link>
              ) : (
                <div className="w-full flex items-center justify-center px-8 py-3 border border-gray-900 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 md:py-[16px] md:text-[18px] md:px-[40px]">
                  {buttonPlain}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
