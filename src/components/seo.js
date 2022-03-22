/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { StructuredData } from "../components/structured-data"

function Seo({ desc, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          property: `og:title`,
          content: title,
        },
      ].concat(meta)}
    >
      <StructuredData>
        {{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://markavowebsitestaging.gatsbyjs.io/markavo-reviews",
          name: "Markavo",
          url: "https://markavowebsitestaging.gatsbyjs.io",
          review: [
            {
              "@type": "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Markavo",
              },
              author: { "@type": "Person", name: "Anonymous" },
              publisher: {
                "@type": "Organization",
                name: "markavowebsitestaging.gatsbyjs.io",
                sameAs: "https://markavowebsitestaging.gatsbyjs.io/",
              },
              datePublished: "2022-03-22 14:08:00",
              reviewBody: "Very Helpful, answers all my Questions.",
              reviewRating: {
                "@type": "Rating",
                bestRating: "5",
                worstRating: "1",
                ratingValue: "5",
              },
            },
          ],
        }}
      </StructuredData>
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
