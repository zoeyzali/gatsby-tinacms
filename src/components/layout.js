import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Globals/header"
import "./layout.css"

const Layout = ( { children } ) => {
  const data = useStaticQuery( graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex flex-col">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="flex-wrap">
        <main className="relative min-h-screen">{children}</main>

        <footer className="absolute inset-x-0 font-medium text-center bg-gray-100 py-8 mt-4 tracking-wide text-sm">
          ©{new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.zoeali.se">zoeecoding@gmail.com</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
