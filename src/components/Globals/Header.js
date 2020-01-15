import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ( { siteTitle } ) => (
    <header className="flex justify-center mb-10 bg-white"
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
                }}
                className="float-left mr-20 h-32 brand">
                Coco.
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
            <Link
                to="/about"
                style={{
                    color: `#000`,
                    textDecoration: `none`,
                    fontWeight: `300`,
                    fontFamily: `Montserrat, sans-serif`,
                    marginInlineEnd: `1rem`
                }}
            >
                Bio
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
