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
    <>
      <div className="flex flex-col min-h-screen">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="relative">

          <main className="p-2">{children}</main>

          <footer className="absolute inset-x-0 bottom-0 text-center mt-4 bg-gray-100 py-4 tracking-widest">
            © {new Date().getFullYear()} Built by
          {` `}
            <a href="https://www.zoeali.se">zoeecoding</a>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
