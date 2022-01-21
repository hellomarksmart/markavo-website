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
      description={
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
      }
      buttonColored={"Get started"}
      buttonColoredLink={"#"}
      buttonPlain={"Live demo"}
      buttonPlainLink={"#"}
    />
    <Deploy
      title={"DEPLOY FASTER"}
      heading={"Everything you need to deploy your app"}
      description={
        "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla."
      }
    />
    <TwoPriceServiceSection />
    <Statistics
      heading={"Trusted by developers from over 80 planets"}
      description={
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium."
      }
      nameLeft={"Pepperoni"}
      statsLeft={"100%"}
      nameCenter={"Delivery"}
      statsCenter={"24/7"}
      nameRight={"Calories"}
      statsRight={"100k"}
    />
    <FAQs />
    <Cta
      heading={"Boost your productivity."}
      headingSecond={"Start using Workflow today."}
      description={
        "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec."
      }
      buttonPlain={"Sign up for free"}
      buttonPlainLink={"#"}
    />
  </>
)

export default TwoPrice
