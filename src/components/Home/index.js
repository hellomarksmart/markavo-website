import * as React from "react"
import ThreePriceServiceSection from "../Reusable Sections/three-price-section"
import Statistics from "../Reusable Sections/statistics-section"
import Cta from "../Reusable Sections/cta-section"

const Home = homeProps => {
  return (
    <>
      <ThreePriceServiceSection />
      <Statistics />
      <Cta />
    </>
  )
}

export default Home
