import * as React from "react"
import Banner from "../Reusable Sections/banner"
import Deploy from "../Reusable Sections/deploy-section"
import ThreePriceServiceSection from "../Reusable Sections/three-price-section"
import Statistics from "../Reusable Sections/statistics-section"
import Cta from "../Reusable Sections/cta-section"

const Home = (data) => (
  <>
    <Banner />
    <Deploy />
    <ThreePriceServiceSection />
    <Statistics />
    <Cta />
  </>
)

export default Home
