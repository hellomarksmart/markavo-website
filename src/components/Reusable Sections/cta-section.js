import * as React from "react"
import { Link } from "gatsby"

const Cta = ({
  heading,
  headingSecond,
  description,
  buttonPlain,
  buttonPlainLink,
}) => {
  return (
    <div className="bg-emerald-400">
      <div className="max-w-[90%] mx-auto text-center py-16 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-[36px] pb-0">
          <span className="block">{heading}</span>
          <span className="block">{headingSecond}</span>
        </h2>
        <p className="mt-0 mx-auto text-base sm:text-[18px] font-sans leading-6 text-emerald-200 sm:max-w-md sm:mx-auto md:max-w-[47rem]">
          {description}
        </p>
        {buttonPlainLink ? (
          <Link
            key={buttonPlain}
            to={buttonPlainLink}
            className="mt-2 sm:w-11/12 mb-4 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-[16px] font-sans font-medium rounded-md text-emerald-400 bg-white hover:bg-emerald-50 sm:w-auto"
          >
            {buttonPlain}
          </Link>
        ) : (
          <div className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-400 bg-white hover:bg-emerald-50 sm:w-auto">
            {buttonPlain}
          </div>
        )}
      </div>
    </div>
  )
}

export default Cta
