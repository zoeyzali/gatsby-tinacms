import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
    <header className="flex justify-center bg-white"
    >
        <div className="header w-full"
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
                COCO.
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
                work
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
                about
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
                contact
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
