import * as React from "react"
import Banner from "../Reusable Sections/banner"
import Deploy from "../Reusable Sections/deploy-section"
import ThreePriceServiceSection from "../Reusable Sections/three-price-section"
import Statistics from "../Reusable Sections/statistics-section"
import Cta from "../Reusable Sections/cta-section"
import FAQs from "../Reusable Sections/faq-section"

const ThreePrice = () => (
  <>
    <Banner />
    <Deploy />
    <ThreePriceServiceSection />
    <Statistics />
    <FAQs />
    <Cta />
  </>
)

export default ThreePrice
