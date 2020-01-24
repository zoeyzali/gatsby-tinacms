import React from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import { isLoggedIn, logout } from "../AuthUtils/Auth"

const Header = () => {
    return (
        <header className="flex justify-around bg-white">
            <div className="header w-full py-6 pr-2">
                <Link
                    to="/"
                    className="float-left h-10 brand text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-4">
                    COCO.
            </Link>
                <Link
                    to="/projects"
                    className="text-md sm:text-sm md:text-xl lg:text-2xl xl:text-2xl bg-yellow-800 tracking-wide">
                    artwork
        </Link>
                <Link
                    to="/about"
                    className="text-md sm:text-sm md:text-xl lg:text-2xl xl:text-2xl bg-yellow-800 tracking-wide">
                    about
        </Link>
                <Link
                    to="/contact"
                    className="text-md sm:text-sm md:text-xl lg:text-2xl xl:text-2xl bg-yellow-800 tracking-wide">
                    contact
        </Link>
                <Link
                    to="/exhibitions"
                    className="text-md sm:text-sm md:text-xl lg:text-2xl xl:text-2xl bg-yellow-800 tracking-wide">
                    shows&stuff
        </Link>
                {isLoggedIn() ? (
                    <a href="/" onClick={event => {
                        event.preventDefault()
                        logout( () => navigate( "/app/login" ) )
                    }}>
                        <span className="text-xs hover:bg-yellow-800">Signout</span>
                    </a>
                ) : (
                        <Link
                            to="/app/admin"
                            className="text-md sm:text-sm md:text-xl lg:text-2xl xl:text-2xl bg-yellow-800 tracking-wide">
                            admin
                    </Link>
                    )
                }
            </div>
        </header>
    )
}


Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
