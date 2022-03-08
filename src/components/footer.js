import React, { useState } from "react"

const Footer = ({ footerBody }) => {
  const footerData = footerBody

  const applications = footerData.data.application_title.text
  const registrations = footerData.data.registration_title.text
  const disputes = footerData.data.disputes_title.text
  const company = footerData.data.company_title.text
  const title = footerData.data.newsletter_title.text
  const desc = footerData.data.newsletter_desc.text
  const placeholder = footerData.data.newsletter_placeholder.text
  const label = footerData.data.newsletter_button_label.text

  const [mailerState, setMailerState] = useState({
    email: "",
  })

  function handleStateChange(e) {
    setMailerState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await window
      .fetch(`/api/newsletter`, {
        method: `PUT`,
        headers: {
          "content-type": "application/json",
          "accept": 'application/json'
        },
        body: JSON.stringify({ mailerState }),
      })
      .then(() => {
        setMailerState({
          email: "",
        });
      });
  };

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-7">
        <div className="pb-8 xl:grid xl:grid-cols-4 xl:gap-4">
          <div className="grid grid-cols-2 gap-4 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                  {applications}
                </h3>
                <ul className="mt-4 space-y-4 ml-0">
                  {footerData.data.applications.map((item, i) => {
                    return (
                      <li key={i}>
                        {item.link.url ? (
                          <a
                            href={item.link.url}
                            className="text-sm font-medium text-gray-500 hover:text-gray-600"
                            title={item.link_title.text}
                          >
                            {item.link_name.text}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-gray-500 hover:text-gray-600">
                            {item.link_name.text}
                          </p>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                  {registrations}
                </h3>
                <ul className="mt-4 space-y-4 ml-0">
                  {footerData.data.registrations.map(
                    (item, i) => (
                      <li key={i}>
                        {item.link.url ? (
                          <a
                            href={item.link.url}
                            className="text-sm font-medium text-gray-500 hover:text-gray-600"
                            title={item.link_title.text}
                          >
                            {item.link_name.text}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-gray-500 hover:text-gray-600">
                            {item.link_name.text}
                          </p>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                  {disputes}
                </h3>
                <ul className="mt-4 space-y-4 ml-0">
                  {footerData.data.disputes.map((item, i) => (
                    <li key={i}>
                      {item.link.url ? (
                        <a
                          href={item.link.url}
                          className="text-sm font-medium text-gray-500 hover:text-gray-600"
                          title={item.link_title.text}
                        >
                          {item.link_name.text}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-500 hover:text-gray-600">
                          {item.link_name.text}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                  {company}
                </h3>
                <ul className="mt-4 space-y-4 ml-0">
                  {footerData.data.company.map((item, i) => (
                    <li key={i}>
                      {item.link.url ? (
                        <a
                          href={item.link.url}
                          className="text-sm font-medium text-gray-500 hover:text-gray-600"
                          title={item.link_title.text}
                        >
                          {item.link_name.text}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-500 hover:text-gray-600">
                          {item.link_name.text}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">

          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
              {title}
            </h3>
            <p className="mt-2 text-sm font text-gray-500">
              {desc}
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            method="PUT"
            className="mt-4 sm:flex sm:max-w-md lg:mt-0">
            <input
              onChange={handleStateChange}
              name="email"
              value={mailerState.email}
              type="email"
              autoComplete="email"
              className="appearance-none min-w-0 w-full bg-white border border-gray-500 rounded-md py-2 px-4 text-sm text-gray-600 placeholder-gray-400 focus:outline-none sm:max-w-xs"
              placeholder={placeholder}
              required
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                value="Send"
                className="w-full bg-gray-900 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-bold text-white hover:bg-white hover:border-gray-900 hover:text-gray-900 focus:outline-none"
              >
                {label}
              </button>
            </div>
          </form>
        </div>
        <div>

        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-sm font-light text-gray-500 md:mt-0 md:order-1">
            {footerData.data.footer_copyright.text}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer