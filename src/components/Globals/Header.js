import React from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import { isLoggedIn, logout, getUser } from "../AuthUtils/Auth"

const Header = () => {
    return (
        <header className="flex justify-around bg-white lg:mt-6 lg:px-6">
            <div className="header w-full py-6 xl:mt-8 flex-wrap">
                <Link
                    to="/"
                    className="float-left h-10 brand text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-5 sm:px-2 sm:pl-1">
                    COCO.
            </Link>
                <Link
                    to="/about"
                    className="text-sm sm:text-xs lg:text-xl xl:text-2xl bg-yellow-800 tracking-wide">
                    about
        </Link>
                <Link
                    to="/projects"
                    className="text-sm sm:text-xs lg:text-xl xl:text-2xl bg-yellow-800 tracking-wide">
                    projects
        </Link>
                <Link
                    to="/exhibitions"
                    className="text-sm sm:text-xs lg:text-xl xl:text-2xl bg-yellow-800 tracking-wide">
                    exhibitions
        </Link>
                {isLoggedIn() ? (
                    <Link
                        to="/app/admin"
                        className="text-xs bg-yellow-800 capitalize tracking-wide">
                        {getUser().name}
                    </Link>
                ) : null
                }
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
                            className="text-xs hover:bg-yellow-800">
                            SignIn
                        </Link>
                    )}
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
