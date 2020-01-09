import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ( { siteTitle } ) => (
  <header
    style={{
      background: `#eee`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `#000`,
          textDecoration: `none`,
          fontWeight: `300`,
          fontFamily: `Montserrat, sans-serif`,
          marginInlineEnd: `1rem`
        }}
      >
        Home
        </Link>
      <Link
        to="/projects"
        style={{
          color: `#000`,
          textDecoration: `none`,
          fontWeight: `300`,
          fontFamily: `Montserrat, sans-serif`,
          marginInlineEnd: `1rem`
        }}
      >
        Projects
        </Link>

      <Link
        to="/contact"
        style={{
          color: `#000`,
          textDecoration: `none`,
          fontWeight: `300`,
          fontFamily: `Montserrat, sans-serif`,
          marginInlineEnd: `1rem`
        }}
      >
        Contacts
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
