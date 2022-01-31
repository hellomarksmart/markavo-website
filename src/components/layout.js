/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import NewHeader from "./new-header"

const Layout = ({ children, headerBody, activeDoc }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header
        activeDoc={activeDoc}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      /> */}
      <NewHeader
        topHeader={headerBody}
        activeDoc={activeDoc}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <>
        <main>{children}</main>
      </>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
