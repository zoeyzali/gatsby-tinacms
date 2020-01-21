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
    <div className="flex flex-col min-h-screen">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="">
        <main className="relative">{children}</main>

        <footer className="absolute inset-x-0 text-center bg-gray-100 py-8 mt-4 tracking-wider text-sm">
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
