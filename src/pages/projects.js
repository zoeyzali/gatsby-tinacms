import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsList from "../components/ProjectsList"


const ProjectsPage = () => (
    <Layout>
        <SEO title="Projects" />
        <ProjectsList />
    </Layout>
)

export default ProjectsPage