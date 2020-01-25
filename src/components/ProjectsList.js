import React from 'react'
import Img from 'gatsby-image'
import useProjectData from '../hooks/useProjectData'


const ProjectsList = () => {
    const projectData = useProjectData()
    function renderProjectData() {
        return (
            <div>
                <div className="antialiased flex flex-wrap -mx-3 mb-4">
                    {projectData.filter( project => project.node.frontmatter.title !== "" ).map( project => {
                        return (
                            <div className="w-full md:w-1/2 px-3 md:mb-0 rounded-lg border bg-white px-4 mx-auto" key={project.node.fields.slug}
                             >
                                <a href={`projects/${project.node.fields.slug}`} rel="noopener" key={project.node.id}>
                                    <div>
                                        <h1 className="font-semibold text-2xl tracking-wide text-gray-800 truncate mt-2">{project.node.frontmatter.title}
                                        </h1>
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
                                        <div className="font-medium text-xs text-gray-700 tracking-wide px-2">
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
        <div className="w-full container mx-auto rounded shadow-xl overflow-hidden project-page">
            {renderProjectData()}
        </div>
    )
}

export default ProjectsList
