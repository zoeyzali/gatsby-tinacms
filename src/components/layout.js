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
      <div className="flex flex-col min-h-screen"
        style={{
          backgroundColor: "#fbff48",
          height: "100%"
        }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="">

          <main className="">{children}</main>

          <footer style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: `Montserrat, sans-serif`,
            marginTop: "3rem"
          }}>
            © {new Date().getFullYear()}, Built by
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
