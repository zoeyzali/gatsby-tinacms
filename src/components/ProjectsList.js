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
            <div className="container max-w-sm rounded">
                {projectData.filter( project => project.node.frontmatter.title !== "" ).map( project => {
                    return (
                        <div className="px-4 mt-2 border mx-auto bg-white">
                            <Link to={`/projects/${project.node.fields.slug}`} key={project.node.id}>
                                <li className="p-2" key={project.node.fields.slug}>
                                    <h2 className="font-semibold text-4xl leading-tighter text-gray-800 truncate">{project.node.frontmatter.title}</h2>
                                    <div className="mt-2">
                                        <Img
                                            fluid={
                                                project.node.frontmatter.hero_image.childImageSharp.fluid
                                            }
                                            alt={project.node.frontmatter.title}
                                        />
                                    </div>
                                    <div className="text-md text-gray-800">
                                        <h4>{project.node.frontmatter.date}</h4>
                                        <p>{project.node.excerpt}</p>
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
        <ul className="flex project-page">{renderProjectData()}</ul>
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
            },
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
            hero_image: projectInfo.hero ? projectInfo.hero : '/content/images/ren-ran-bBiuSdck8tU-unsplash.jpg',
            author: projectInfo.author ? projectInfo.author : 'Zoe Ali'

        } )
    },
    body: () => `New post, who dis?`
} )

export default withPlugin( ProjectsList, CreateProjectButton )
