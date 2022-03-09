import React from "react"
import { Link } from "gatsby"
import { ChevronLeftIcon } from "@heroicons/react/solid"
import Seo from "../components/seo"

const Sitemap = () => {
  const sitemapEN = [
    { title: '0001 - Home', href: '/' },
    { title: '0002 - Markavo Reviews', href: '/markavo-reviews' },
    { title: '0003 - 404', href: '/404' },
    { title: '0004 - About Us', href: '/about-us' },
    { title: '0005 - All Services Registration', href: '/all-services-registrations' },
    { title: '0006 - All Services Application', href: '/all-services-applications' },
    { title: '0007 - All Services Disputes', href: '/all-services-disputes' },
    { title: '0008 - Contact Us', href: '/contact-us' },
    { title: '0009 - Free Trademark Search', href: '/free-trademark-search' },
    { title: '0010 - Trademark Application Service Terms Of Service', href: '/trademark-application-service-terms-of-service' },
    { title: '0011 - Privacy', href: '/privacy' },
    { title: '0012 - Trademark Statement of Use or Extension Service', href: '/trademark-statement-of-use-or-extension-service' },
    { title: '0013 - Settlement Negotiation Service Terms Of Service', href: '/settlement-negotiation-service-terms-of-service' },
    { title: '0014 - Office Action Response Service Terms Of Service', href: '/office-action-response-service-terms-of-service' },
    { title: '0015 - Settlement Drafting Service Terms Of Service', href: '/settlement-drafting-service-terms-of-service' },
    { title: '0016 - Suggestive Brand Generator', href: '/suggestive-brand-generator' },
    { title: '0017 - Trademark Monitoring Service Terms Of Service', href: '/trademark-monitoring-service-terms-of-service' },
    { title: '0018 - Trademark Re-examination Service Terms Of Service', href: '/trademark-reexamination-service-terms-of-service' },
    { title: '0019 - Trademark Address Update Terms Of Service', href: '/trademark-address-update-terms-of-service' },
    { title: '0020 - Trademark Expungement Service Terms Of Service', href: '/trademark-expungement-service-terms-of-service' },
    { title: '0021 - Why Markavo', href: '/why-markavo' },
    { title: '0022 - Trademark Search Service', href: '/trademark-search-service' },
    { title: '0023 - Trademark Renewal Service Terms Of Service', href: '/trademark-renewal-service-terms-of-service' },
    { title: '0024 - International Trademark Service Terms Of Service', href: '/international-trademark-service-terms-of-service' },
    { title: '0025 - Terms', href: '/terms' },
    { title: '0026 - Letter Of Protest Service Terms Of Service', href: '/letter-of-protest-service-terms-of-service' },
    { title: '0027 - Trademark Ownership Assignment Service Terms Of Service', href: '/trademark-ownership-assignment-service-terms-of-service' },
    { title: '0028 - Trademark Enforcement Service Terms Of Service', href: '/trademark-enforcement-service-terms-of-service' },
    { title: '0029 - Settlement Drafting', href: '/settlement-drafting' },
    { title: '0030 - International Trademark Application', href: '/international-trademark-application' },
    { title: '0031 - Trademark Office Action Response', href: '/trademark-office-action-response' },
    { title: '0032 - Trademark Re-examination Proceeding', href: '/trademark-reexamination-proceeding' },
    { title: '0033 - Trademark Application', href: '/trademark-application' },
    { title: '0034 - Trademark Letter Of Protest', href: '/trademark-letter-of-protest' },
    { title: '0035 - Trademark Address Update', href: '/trademark-address-update' },
    { title: '0036 - Trademark Assignment', href: '/trademark-assignment' },
    { title: '0037 - Trademark Statement Of Use', href: '/trademark-statement-of-use' },
    { title: '0038 - Trademark Renewal', href: '/trademark-renewal' },
    { title: '0039 - Settlement Negotiation', href: '/settlement-negotiation' },
    { title: '0040 - Comprehensive Trademark Search', href: '/comprehensive-trademark-search' },
    { title: '0041 - Trademark Cease And Desist Letter', href: '/trademark-cease-and-desist-letter' },
    { title: '0042 - Trademark Expungement Proceeding', href: '/trademark-expungement-proceeding' },
    { title: '0043 - Trademark Monitoring', href: '/trademark-monitoring' },
  ]
  const sitemapES = [
    { title: '0001 - Home (ES)', href: '/es' },
    { title: '0002 - Markavo Resenas (ES)', href: '/es/markavo-resenas' },
    { title: '0003 - 404 (ES)', href: '/es/404' },
    { title: '0004 - Sobre Nosotros (ES)', href: '/es/sobre-nosotros' },
    { title: '0005 - Todos Servicios Registros (ES)', href: '/es/todos-servicios-registros' },
    { title: '0006 - Aplicaciones Todos Los Servicios (ES)', href: '/aplicaciones-todos-los-servicios' },
    { title: '0007 - Todos Los Servicios Disputas (ES)', href: '/es/todos-los-servicios-disputas' },
    { title: '0008 - Contacta Con Nosotros (ES)', href: '/es/contacta-con-nosotros' },
    { title: '0009 - Gratis Busqueda De Marcas (ES)', href: '/es/gratis-busqueda-de-marcas' },
    { title: '0010 - Trademark Application Service Terms Of Service (ES)', href: '/es/trademark-application-service-terms-of-service' },
    { title: '0011 - Privacy (ES)', href: '/es/privacy' },
    { title: '0012 - Trademark Statement of Use or Extension Service (ES)', href: '/es/trademark-statement-of-use-or-extension-service' },
    { title: '0013 - Settlement Negotiation Service Terms Of Service (ES)', href: '/es/settlement-negotiation-service-terms-of-service' },
    { title: '0014 - Office Action Response Service Terms Of Service (ES)', href: '/es/office-action-response-service-terms-of-service' },
    { title: '0015 - Settlement Drafting Service Terms Of Service (ES)', href: '/es/settlement-drafting-service-terms-of-service' },
    { title: '0016 - Suggestive Brand Generator (ES)', href: '/es/suggestive-brand-generator' },
    { title: '0017 - Trademark Monitoring Service Terms Of Service (ES)', href: '/es/trademark-monitoring-service-terms-of-service' },
    { title: '0018 - Trademark Re-examination Service Terms Of Service (ES)', href: '/es/trademark-reexamination-service-terms-of-service' },
    { title: '0019 - Trademark Address Update Terms Of Service (ES)', href: '/es/trademark-address-update-terms-of-service' },
    { title: '0020 - Trademark Expungement Service Terms Of Service (ES)', href: '/es/trademark-expungement-service-terms-of-service' },
    { title: '0021 - Why Markavo (ES)', href: '/es/why-markavo' },
    { title: '0022 - Trademark Search Service (ES)', href: '/es/trademark-search-service' },
    { title: '0023 - Trademark Renewal Service Terms Of Service (ES)', href: '/es/trademark-renewal-service-terms-of-service' },
    { title: '0024 - International Trademark Service Terms Of Service (ES)', href: '/es/international-trademark-service-terms-of-service' },
    { title: '0025 - Terms (ES)', href: '/es/terms' },
    { title: '0026 - Letter Of Protest Service Terms Of Service (ES)', href: '/es/letter-of-protest-service-terms-of-service' },
    { title: '0027 - Trademark Ownership Assignment Service Terms Of Service (ES)', href: '/es/trademark-ownership-assignment-service-terms-of-service' },
    { title: '0028 - Trademark Enforcement Service Terms Of Service (ES)', href: '/es/trademark-enforcement-service-terms-of-service' },
    { title: '0029 - Redaccion De Acuerdos (ES)', href: '/es/redaccion-de-acuerdos' },
    { title: '0030 - Solicitud De Marca Internacional (ES)', href: '/es/solicitud-de-marca-internacional' },
    { title: '0031 - Marca Oficina Accion Respuesta (ES)', href: '/es/marca-oficina-accion-respuesta' },
    { title: '0032 - Marca Reexamen Procedimiento (ES)', href: '/es/marca-reexamen-procedimiento' },
    { title: '0033 - Solicitud De Marca(ES)', href: '/es/solicitud-de-marca' },
    { title: '0034 - Marca Carta De Protesta (ES)', href: '/es/marca-carta-de-protesta' },
    { title: '0035 - Actualizacion De Direccion De Marca Registrada (ES)', href: '/es/actualizacion-de-direccion-de-marca-registrada' },
    { title: '0036 - Cesion De Marca (ES)', href: '/es/cesion-de-marca' },
    { title: '0037 - Marca Declaracion De Uso (ES)', href: '/es/marca-declaracion-de-uso' },
    { title: '0038 - Renovacion De Marca (ES)', href: '/es/renovacion-de-marca' },
    { title: '0039 - Negociacion De Acuerdos (ES)', href: '/es/negociacion-de-acuerdos' },
    { title: '0040 - Busqueda Comprehensiva De Marcas (ES)', href: '/es/busqueda-comprehensiva-de-marcas' },
    { title: '0041 - Carta De Cese Y Desista De Marca (ES)', href: '/es/carta-de-cese-y-desista-de-marca' },
    { title: '0042 - Procedimiento De Borrado De Marca Registrada (ES)', href: '/es/procedimiento-de-borrado-de-marca-registrada' },
    { title: '0043 - Monitoreo De Marcas Registradas (ES)', href: '/es/monitoreo-de-marcas-registradas' },
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

      <div className="my-4">
        <h2
          className="mr-2 text-3xl"
        > EN
        </h2>
        <div
          className="columns-1 md:columns-2 lg:columns-3 ">
          {sitemapEN.map((item, i) => (
            <ul
              className="mb-1 ml-0 odd:bg-white even:bg-slate-100"
              key={i - toString()}>
              <a
                className="text-xs font-medium hover:underline hover:text-emerald-400"
                href={item.href}>
                {item.title}
              </a>
            </ul>
          ))}
        </div>
      </div >
      <div className="my-10">
        <h2
          className="mb-5 mr-2 text-3xl"
        > ES
        </h2>
        <div
          className="columns-1 md:columns-2 lg:columns-3 ">
          {sitemapES.map((item, i) => (
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
    </div >
  )
}

export default Sitemap