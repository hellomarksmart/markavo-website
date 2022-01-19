import * as React from "react"

import Banner from "../Reusable Sections/banner"
import AboutSection from "../About/about-section"
import Cta from "../Reusable Sections/cta-section"

const About = () => (
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
    <AboutSection />
    <Cta />
  </>
)

export default About
