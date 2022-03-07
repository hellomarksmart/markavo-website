import React from "react"
import { Link } from "gatsby"
import { ChevronLeftIcon } from "@heroicons/react/solid"
import Seo from "../components/seo"

const Sitemap = () => {
  const list = [
    { title: '0001 - Home', href: '/' },
    { title: '0002 - Home (ES)', href: '/es' },
    { title: '0003 - Markavo Reviews', href: '/markavo-reviews' },
    { title: '0004 - Markavo Reviews (ES)', href: '/es/markavo-reviews' },
    { title: '0005 - 404', href: '/404' },
    { title: '0006 - 404 (ES)', href: '/es/404' },
    { title: '0007 - About Us', href: '/about-us' },
    { title: '0008 - About Us (ES)', href: '/es/about-us' },
    { title: '0009 - All Services Registration', href: '/all-services-registrations' },
    { title: '0010 - All Services Registration (ES)', href: '/es/all-services-registrations' },

    { title: '0011 - All Services Application', href: '/all-services-applications' },
    { title: '0012 - All Services Application (ES)', href: '/es/all-services-applications' },
    { title: '0013 - All Services Disputes', href: '/all-services-disputes' },
    { title: '0014 - All Services Disputes (ES)', href: '/es/all-services-disputes' },
    { title: '0015 - Contact Us', href: '/contact-us' },
    { title: '0016 - Contact Us (ES)', href: '/es/contact-us' },
    { title: '0017 - Free Trademark Search', href: '/free-trademark-search' },
    { title: '0018 - Free Trademark Search (ES)', href: '/es/free-trademark-search' },
    { title: '0019 - Trademark Application Service Terms Of Service', href: '/trademark-application-service-terms-of-service' },
    { title: '0020 - Trademark Application Service Terms Of Service (ES)', href: '/es/trademark-application-service-terms-of-service' },
    { title: '0021 - Privacy', href: '/privacy' },
    { title: '0022 - Privacy (ES)', href: '/es/privacy' },
    { title: '0023 - Trademark Statement of Use or Extension Service', href: '/trademark-statement-of-use-or-extension-service' },
    { title: '0024 - Trademark Statement of Use or Extension Service (ES)', href: '/es/trademark-statement-of-use-or-extension-service' },
    { title: '0025 - Settlement Negotiation Service Terms Of Service', href: '/settlement-negotiation-service-terms-of-service' },
    { title: '0026 - Settlement Negotiation Service Terms Of Service (ES)', href: '/es/settlement-negotiation-service-terms-of-service' },
    { title: '0027 - Office Action Response Service Terms Of Service', href: '/office-action-response-service-terms-of-service' },
    { title: '0028 - Office Action Response Service Terms Of Service (ES)', href: '/es/office-action-response-service-terms-of-service' },
    { title: '0029 - Settlement Drafting Service Terms Of Service', href: '/settlement-drafting-service-terms-of-service' },
    { title: '0030 - Settlement Drafting Service Terms Of Service (ES)', href: '/es/settlement-drafting-service-terms-of-service' },
    { title: '0031 - Suggestive Brand Generator', href: '/suggestive-brand-generator' },
    { title: '0032 - Suggestive Brand Generator (ES)', href: '/es/suggestive-brand-generator' },
    { title: '0033 - Trademark Monitoring Service Terms Of Service', href: '/trademark-monitoring-service-terms-of-service' },
    { title: '0034 - Trademark Monitoring Service Terms Of Service (ES)', href: '/es/trademark-monitoring-service-terms-of-service' },
    { title: '0035 - Trademark Re-examination Service Terms Of Service', href: '/trademark-reexamination-service-terms-of-service' },
    { title: '0036 - Trademark Re-examination Service Terms Of Service (ES)', href: '/es/trademark-reexamination-service-terms-of-service' },
    { title: '0037 - Trademark Address Update Terms Of Service', href: '/trademark-address-update-terms-of-service' },
    { title: '0038 - Trademark Address Update Terms Of Service (ES)', href: '/es/trademark-address-update-terms-of-service' },
    { title: '0039 - Trademark Expungement Service Terms Of Service', href: '/trademark-expungement-service-terms-of-service' },
    { title: '0040 - Trademark Expungement Service Terms Of Service (ES)', href: '/es/trademark-expungement-service-terms-of-service' },

    { title: '0041 - Why Markavo', href: '/why-markavo' },
    { title: '0042 - Why Markavo (ES)', href: '/es/why-markavo' },

    { title: '0043 - Trademark Search Service', href: '/trademark-search-service' },
    { title: '0044 - Trademark Search Service (ES)', href: '/es/trademark-search-service' },

    { title: '0045 - Trademark Renewal Service Terms Of Service', href: '/trademark-renewal-service-terms-of-service' },
    { title: '0046 - Trademark Renewal Service Terms Of Service (ES)', href: '/es/trademark-renewal-service-terms-of-service' },

    { title: '0047 - International Trademark Service Terms Of Service', href: '/international-trademark-service-terms-of-service' },
    { title: '0048 - International Trademark Service Terms Of Service (ES)', href: '/es/international-trademark-service-terms-of-service' },
    { title: '0049 - Terms', href: '/terms' },
    { title: '0050 - Terms (ES)', href: '/es/terms' },
    { title: '0051 - Letter Of Protest Service Terms Of Service', href: '/letter-of-protest-service-terms-of-service' },
    { title: '0052 - Letter Of Protest Service Terms Of Service (ES)', href: '/es/letter-of-protest-service-terms-of-service' },
    { title: '0053 - Trademark Ownership Assignment Service Terms Of Service', href: '/trademark-ownership-assignment-service-terms-of-service' },
    { title: '0054 - Trademark Ownership Assignment Service Terms Of Service (ES)', href: '/es/trademark-ownership-assignment-service-terms-of-service' },
    { title: '0055 - Trademark Enforcement Service Terms Of Service', href: '/trademark-enforcement-service-terms-of-service' },
    { title: '0056 - Trademark Enforcement Service Terms Of Service (ES)', href: '/es/trademark-enforcement-service-terms-of-service' },
    { title: '0057 - Settlement Drafting', href: '/settlement-drafting' },
    { title: '0058 - Settlement Drafting (ES)', href: '/es/settlement-drafting' },
    { title: '0059 - International Trademark Application', href: '/international-trademark-application' },
    { title: '0060 - International Trademark Application (ES)', href: '/es/international-trademark-application' },
    { title: '0061 - Trademark Office Action Response', href: '/trademark-office-action-response' },
    { title: '0062 - Trademark Office Action Response (ES)', href: '/es/trademark-office-action-response' },
    { title: '0063 - Trademark Re-examination Proceeding', href: '/trademark-reexamination-proceeding' },
    { title: '0064 - Trademark Re-examination Proceeding (ES)', href: '/es/trademark-reexamination-proceeding' },
    { title: '0065 - Trademark Application', href: '/trademark-application' },
    { title: '0066 - Trademark Application (ES)', href: '/es/trademark-application' },
    { title: '0067 - Trademark Letter Of Protest', href: '/trademark-letter-of-protest' },
    { title: '0068 - Trademark Letter Of Protest (ES)', href: '/es/trademark-letter-of-protest' },
    { title: '0069 - Trademark Address Update', href: '/trademark-address-update' },
    { title: '0070 - Trademark Address Update (ES)', href: '/es/trademark-address-update' },
    { title: '0071 - Trademark Assignment', href: '/trademark-assignment' },
    { title: '0072 - Trademark Assignment (ES)', href: '/es/trademark-assignment' },
    { title: '0073 - Trademark Statement Of Use', href: '/trademark-statement-of-use' },
    { title: '0074 - Trademark Statement Of Use (ES)', href: '/es/trademark-statement-of-use' },
    { title: '0075 - Trademark Renewal', href: '/trademark-renewal' },
    { title: '0076 - Trademark Renewal (ES)', href: '/es/trademark-renewal' },
    { title: '0077 - Settlement Negotiation', href: '/settlement-negotiation' },
    { title: '0078 - Settlement Negotiation (ES)', href: '/es/settlement-negotiation' },
    { title: '0079 - Comprehensive Trademark Search', href: '/comprehensive-trademark-search' },
    { title: '0080 - Comprehensive Trademark Search (ES)', href: '/es/comprehensive-trademark-search' },
    { title: '0081 - Trademark Cease And Desist Letter', href: '/trademark-cease-and-desist-letter' },
    { title: '0082 - Trademark Cease And Desist Letter (ES)', href: '/es/trademark-cease-and-desist-letter' },
    { title: '0083 - Trademark Expungement Proceeding', href: '/trademark-expungement-proceeding' },
    { title: '0084 - Trademark Expungement Proceeding (ES)', href: '/es/trademark-expungement-proceeding' },
    { title: '0085 - Trademark Monitoring', href: '/trademark-monitoring' },
    { title: '0086 - Trademark Monitoring (ES)', href: '/es/trademark-monitoring' },
  ]

  return (
    <div
      className="w-10/12 mx-auto">
      <Seo title="Sitemap" />
      <div className="flex flex-row mt-6 mb-2 -ml-6">
        <ChevronLeftIcon className="h-5 w-5 mt-xs" aria-hidden="true" />
        <Link
          href="/"
          className="text-md lg:text-base md:text-sm font-semibold text-gray-900 pl-1 hover:text-gray-800"
        >
          Back to Homepage
        </Link>
      </div>
      <div className="flex flex-row">
        <h2
          className="mb-5 mr-2 text-emerald-400 text-3xl"
        > Markavo
        </h2>
        <h2
          className="mb-5 text-3xl"
        > Sitemap
        </h2>
      </div>

      <div
        className="columns-1 md:columns-2 lg:columns-3">
        {list.map((item, i) => (
          <ul
            className="mb-2 ml-0 odd:bg-white even:bg-slate-100"
            key={i - toString()}>
            <a
              className="text-xs font-medium hover:underline hover:text-emerald-400"
              href={item.href}>
              {item.title}
            </a>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Sitemap