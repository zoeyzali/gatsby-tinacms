import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { withPlugin } from 'tinacms'
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark'
import useProjectData from '../hooks/useProjectData'



const ProjectsList = () => {
    const projectData = useProjectData()
    function renderProjectData() {
        return (
            <div className="max-w-md min-h-screen rounded shadow-xl overflow-hidden">
                {projectData.filter( project => project.node.frontmatter.title !== "" ).map( project => {
                    return (
                        <div className="px-4 mt-2 border mx-auto bg-white">
                            <Link to={`/projects/${project.node.fields.slug}`} rel="noopener" key={project.node.id}>
                                <li key={project.node.fields.slug}>
                                    <h2 className="font-semibold text-4xl leading-wider text-gray-700 truncate mt-4">{project.node.frontmatter.title}</h2>
                                    <div className="w-full">
                                        <Img
                                            fluid={
                                                project.node.frontmatter.hero_image.childImageSharp.fluid
                                            }
                                            alt={project.node.frontmatter.title}
                                        />
                                    </div>
                                    <div className="font-semibold text-sm text-gray-700">
                                        <span>{project.node.frontmatter.date}
                                        </span>
                                        <p className="mt-3 font-light">{project.node.excerpt}</p>
                                    </div>
                                </li>
                            </Link>
                        </div>
                    )
                } )
                }
            </div>
        )
    }
    return (
        <ul className="flex justify-center flex-wrap project-page">{renderProjectData()}
        </ul>
    )
}

const CreateProjectButton = new RemarkCreatorPlugin( {
    label: 'Add New Project',
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
