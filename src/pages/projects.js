import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsList from "../components/ProjectsList"
// import { isLoggedIn } from "../components/AuthUtils/Auth"
// import { navigate } from "gatsby"

const ProjectsPage = () => {
    // if ( isLoggedIn() ) {
    //     navigate( "/app/projects" )
    // } else {
    //     navigate( '/projects' )
    // }
    return (
        <Layout>
            <SEO title="Projects" />
            <ProjectsList />
        </Layout>
    )
}


export default ProjectsPage