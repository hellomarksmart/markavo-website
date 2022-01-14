import * as React from "react"
import Banner from "../Reusable Sections/banner"
import Deploy from "../Reusable Sections/deploy-section"
import ThreePrice from "../Reusable Sections/three-price-section"
import Statistics from "../Reusable Sections/statistics-section"
import Cta from "../Reusable Sections/cta-section"

const Home = () => (
  <>
    <Banner />
    <Deploy />
    <ThreePrice />
    <Statistics />
    <Cta />
  </>
)

export default Home
