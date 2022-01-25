import * as React from "react"

const ContactSection = ({ heading, description, contact_items }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">{heading}</h2>
        <p className="mt-6 text-lg text-gray-500 max-w-3xl">{description}</p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {contact_items?.map((item, i) => {
            return (
              <div key={i}>
                <h3 className="text-lg font-medium text-gray-900">
                  {item?.contact_title.text}
                </h3>
                {item?.contact_details.text ? (
                  <p className="mt-2 text-base text-gray-500">
                    {item?.contact_details.text}
                  </p>
                ) : (
                  ""
                )}
                {item?.qr_code.url ? (
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src={item?.qr_code.url}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ContactSection
