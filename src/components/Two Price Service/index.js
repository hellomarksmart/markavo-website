import * as React from "react"
import Banner from "../Reusable Sections/banner"
import Deploy from "../Reusable Sections/deploy-section"
import TwoPriceServiceSection from "../Two Price Service/two-price-service-section"
import Statistics from "../Reusable Sections/statistics-section"
import Cta from "../Reusable Sections/cta-section"
import FAQs from "../Reusable Sections/faq-section"

const TwoPrice = () => (
  <>
    <Banner
      heading={"Data to enrich your"}
      headingColored={"online business"}
      description={"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}
      buttonColored={"Get started"}
      buttonColoredLink={"#"}
      buttonPlain={"Live demo"}
      buttonPlainLink={"#"}
    />
    <Deploy />
    <TwoPriceServiceSection />
    <Statistics />
    <FAQs />
    <Cta />
  </>
)

export default TwoPrice
