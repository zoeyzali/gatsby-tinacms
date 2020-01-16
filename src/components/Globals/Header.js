import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
    <header className="flex justify-between bg-white"
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
                className="float-left mr-15 h-32 brand">
                COCO.
            </Link>
            <Link
                to="/projects"
                style={{
                    color: `#000`,
                    textDecoration: `none`,
                    fontWeight: `300`,
                    fontFamily: `Montserrat, sans-serif`,
                }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl justify-between">
                work
        </Link>
            <Link
                to="/about"
                style={{
                    color: `#000`,
                    textDecoration: `none`,
                    fontWeight: `300`,
                    fontFamily: `Montserrat, sans-serif`,
                }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl justify-between">
                about
        </Link>
            <Link
                to="/contact"
                style={{
                    color: `#000`,
                    textDecoration: `none`,
                    fontWeight: `300`,
                    fontFamily: `Montserrat, sans-serif`,
                }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
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
