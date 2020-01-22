import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
    <header className="flex justify-between bg-white"
    >
        <div className="header w-full py-6 px-4">
            <Link
                to="/"
                className="float-left h-10 brand text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                COCO.
            </Link>
            <Link
                to="/projects"
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl justify-between bg-yellow-800 tracking-widest">
                work
        </Link>
            <Link
                to="/about"
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl justify-between bg-yellow-800 tracking-widest">
                about
        </Link>
            <Link
                to="/contact"
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl bg-yellow-800 tracking-widest">
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
