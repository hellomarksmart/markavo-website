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
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">{heading}</span>
          <span className="block">{headingSecond}</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-emerald-200">{description}</p>
        {buttonPlainLink ? (
          <Link
            key={buttonPlain}
            to={buttonPlainLink}
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-400 bg-white hover:bg-emerald-50 sm:w-auto"
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
