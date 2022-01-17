import * as React from "react"
import Banner from "../Reusable Sections/banner"
import Deploy from "../Reusable Sections/deploy-section"
import TwoPriceServiceSection from "../Two Price Service/two-price-service-section"
import Statistics from "../Reusable Sections/statistics-section"
import Cta from "../Reusable Sections/cta-section"
import FAQs from "../Reusable Sections/faq-section"

const TwoPrice = () => (
  <>
    <Banner />
    <Deploy />
    <TwoPriceServiceSection />
    <Statistics />
    <FAQs />
    <Cta />
  </>
)

export default TwoPrice
