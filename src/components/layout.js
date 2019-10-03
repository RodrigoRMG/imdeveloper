/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


const Layout = ({ children }) => {
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
      <main>{children}</main>
      <div className="footer flex text-right flex-row-reverse">
      <a className="text-white mr-6  p-1">Idioma: Español</a>
        <span className="text-white mr-6  p-1 hidden md:block">Spaces: 2</span>
        <span className="text-white mr-6  p-1 hidden md:block">UTF-8</span>
        <span className="text-white mr-6  p-1 hidden md:block">Javascript</span>
        <div class="downArrow bounce hidden md:block" >
        <span class="arrow"><span></span><span></span></span>
        </div>
        
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
