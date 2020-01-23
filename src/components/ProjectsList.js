import React from 'react'
import Img from 'gatsby-image'
import { withPlugin } from 'tinacms'
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark'
import useProjectData from '../hooks/useProjectData'
import ExhibitionsList from "../components/ExhibitionsList"

const ProjectsList = () => {
    const projectData = useProjectData()
    function renderProjectData() {
        return (
            <div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    {projectData.filter( project => project.node.frontmatter.title !== "" ).map( project => {
                        return (
                            <div className="w-full md:w-1/2 px-3 md:mb-0 rounded-lg border bg-white px-4 mx-auto"
                                key={project.node.id}>
                                <a href={`/projects/${project.node.fields.slug}`} rel="noopener">
                                    <div key={project.node.fields.slug}>
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
                <div className="w-100 antialiased text-center -mx-2 mb-6 mt-8 pt-10">
                    <div className="pb-2/3">
                        <h2 className="font-semibold text-3xl">Rece<span className="bg-yellow-800 tracking-wide">nt Exhibitions</span>
                        </h2>
                        <ExhibitionsList />
                    </div>
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

const CreateProjectButton = new RemarkCreatorPlugin( {
    label: 'Add New Content',
    filename: name => {
        //replace all spaces for hyphen
        let slug = name.title.replace( /\s+/g, '-' ).toLowerCase()
        return `content/projects/${slug}.md`
    },
    fields: [
        {
            name: "hero",
            description: "Pick a good one",
            label: "Hero",
            component: "image",
            // Generate the frontmatter value based on the filename
            parse: filename => `/content/images/${filename}`,
            // Decide the file upload directory for the image
            uploadDir: () => {
                return "/content/images/"
            },
            // Todo: Fix the preview source
            previewSrc: ( postInfo ) => {
                return postInfo.hero
            }
        },
        {
            label: 'Title',
            name: 'title',
            component: 'text',
            required: true
        },
        {
            label: 'Date',
            name: 'date',
            component: 'date',
            description: 'The default will be today'
        },
        {
            label: 'Author',
            description: 'Who wrote this, yo?',
            name: 'author',
            component: 'text'
        }
    ],
    frontmatter: ( projectInfo ) => {
        return ( {
            title: projectInfo.title,
            date: new Date(),
            //choosing a default image so we don't get an error
            hero_image: projectInfo.hero ? projectInfo.hero : '/content/images/murphys-law.png',
            author: projectInfo.author ? projectInfo.author : 'COCO.'
        } )
    },
    body: () => `New post, who dis?`
} )

export default withPlugin( ProjectsList, CreateProjectButton )
