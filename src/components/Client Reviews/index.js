import * as React from "react"
import Banner from "../Reusable Sections/banner"
import ClientReviewsSection from "../Client Reviews/client-reviews-section"
import Pagination from "../Reusable Sections/pagination-section"
import Cta from "../Reusable Sections/cta-section"

const Reviews = () => (
  <>
    <Banner />
    <ClientReviewsSection />
    <Pagination />
    <Cta />
  </>
)

export default Reviews
