import * as React from "react"
import { Link } from "gatsby"

const CTAContent = [
  {
    heading: "Boost your productivity.",
    headingSecond: "Start using Workflow today.",
    description:
      "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.",
    buttonPlain: "Sign up for free",
    buttonPlainLink: "#",
  },
]

const Cta = () => {
  return (
    <div className="bg-emerald-400">
      {CTAContent.map(item => (
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">{item.heading}</span>
            <span className="block">{item.headingSecond}</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-emerald-200">
            {item.description}
          </p>
          <a
            href={item.buttonPlainLink}
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-400 bg-white hover:bg-emerald-50 sm:w-auto"
          >
            {item.buttonPlain}
          </a>
        </div>
      ))}
    </div>
  )
}

export default Cta
