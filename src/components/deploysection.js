import * as React from "react"
import {
  CloudUploadIcon,
  LockClosedIcon,
  RefreshIcon,
} from '@heroicons/react/outline'

const features = [
  { name: 'Push to Deploy', icon: CloudUploadIcon, desc: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis' },
  { name: 'SSL Certificates', icon: LockClosedIcon, desc: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis' },
  { name: 'Simple Queues', icon: RefreshIcon, desc: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis' },
]

const headings = [
  {
    title: "Deploy faster",
    heading: "Everything you need to deploy your app",
    sub_heading: "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.",
  },
]

export default function DeploySection() {
  return (
    <div className="relative bg-white pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        {headings.map(item => (
          <>
            <h2 className="text-base font-semibold font-sans tracking-wider text-emerald-500 uppercase">
              {item.title}
            </h2>
            <p className="mt-2 text-3xl font-extrabold font-sans text-gray-900 tracking-tight sm:text-4xl">
              {item.heading}
            </p>
            <p className="mt-5 max-w-prose mx-auto font-sans text-xl text-gray-500">
              {item.sub_heading}
            </p>
          </>
        ))}

        <div className="mt-12 bg-white">
          <div className="bg-white grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base font-sans text-gray-500">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}