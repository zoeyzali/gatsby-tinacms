import React from 'react'
import Img from 'gatsby-image'
import useProjectData from '../hooks/useProjectData'

const ProjectsList = () => {
    const projectData = useProjectData()
    function renderProjectData() {
        return (
            <div>
                <div className="antialiased flex flex-wrap mb-2 py-4">
                    {projectData.filter( project => project.node.frontmatter.title !== "" ).map( project => {
                        return (
                            <div className="w-full md:w-1/2 md:mb-0 xl:mt-6 rounded-lg border bg-white px-3 mx-auto text-gray-800" key={project.node.fields.slug}
                             >
                                <a href={`/projects/${project.node.fields.slug}`} rel="noopener" key={project.node.id}>
                                    <div>
                                        <h2 className="font-semibold tracking-wide truncate mt-2 py-3">{project.node.frontmatter.title}
                                        </h2>
                                        <div className="h-auto pb-2/3">
                                            <Img
                                                fluid={
                                                    project.node.frontmatter.hero_image.childImageSharp.fluid
                                                }
                                                alt={project.node.frontmatter.title}
                                                className="h-64 object-center 
                                                object-cover
                                                object-fit rounded-lg"
                                            />
                                        </div>
                                        <div className="font-semibold text-xs text-gray-700 tracking-wide px-2">
                                            <span>{project.node.frontmatter.date}
                                            </span>
                                            <p className="font-lighter pt-2">{project.node.excerpt}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    } )}
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 rounded-lg overflow-hidden project-page">
            {renderProjectData()}
        </div>
    )
}

export default ProjectsList
