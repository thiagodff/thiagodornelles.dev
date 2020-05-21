/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"

const Layout = ({ children, title }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header siteTitle="Thiago" title={title} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 980,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, {` `}
          <a href="https://www.linkedin.com/in/thiago-fernandes-dornelles/">Thiago Fernandes Dornelles</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
