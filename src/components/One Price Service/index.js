import * as React from "react"
import Banner from "../Reusable Sections/banner"
import Deploy from "../Reusable Sections/deploy-section"
import OnePriceServiceSection from "../One Price Service/one-price-service-section"
import Statistics from "../Reusable Sections/statistics-section"
import Cta from "../Reusable Sections/cta-section"
import FAQs from "../Reusable Sections/faq-section"

const OnePrice = () => (
  <>
    <Banner />
    <Deploy />
    <OnePriceServiceSection />
    <Statistics />
    <FAQs />
    <Cta />
  </>
)

export default OnePrice
