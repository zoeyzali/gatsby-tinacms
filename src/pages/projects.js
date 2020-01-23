import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsList from "../components/ProjectsList"
import { Link } from "gatsby"
import { isLoggedIn, getUser } from "../components/AuthUtils/Auth"

const ProjectsPage = () => (
    <Layout>
        <SEO title="Projects" />
        <div className="antialiased text-center mb-4 mt-6 pt-2 pb-6">
            <h3 className="text-center font-medium capitalize">Hello {isLoggedIn() ? getUser().name : "Stranger"}!</h3>
            {isLoggedIn() ? (
                <span className="text-sm text-center">
                    You are logged in.. Go to {" "}
                    <Link to="/app/admin" className="text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl bg-yellow-800">
                        Adminspage!
                    </Link>
                </span>
            ) : (
                    <span className="text-sm text-center">
                        Go to <Link to="/app/login" className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl bg-yellow-800">Login</Link>
                    </span>
                )}
        </div>
        <ProjectsList />
    </Layout>
)

export default ProjectsPage