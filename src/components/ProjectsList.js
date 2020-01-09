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
            <div>
                {projectData.filter( project => project.node.frontmatter.title !== "" ).map( project => {
                    return (
                        <div className="container">
                            <li className={"projectListStyles.li"} key={project.node.fields.slug}>
                                <Link to={`/projects/${project.node.fields.slug}`} key={project.node.id}>
                                    <h2>{project.node.frontmatter.title}</h2>
                                </Link>
                                <div className={"projectListStyles.list__hero"}>
                                    <Img
                                        fluid={
                                            project.node.frontmatter.hero_image.childImageSharp.fluid
                                        }
                                        alt={project.node.frontmatter.title}
                                    />
                                </div>
                                <div className={"projectListStyles.list__info"}>
                                    <h4>{project.node.frontmatter.date}</h4>
                                    <p>{project.node.excerpt}</p>
                                </div>
                            </li>
                        </div>
                    )
                } )
                }
            </div >
        )
    }
    return (
        <section>
            <ul className="projects-list">{renderProjectData()}</ul>
        </section>
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
        // Commented out until we find a solution for previewSrc
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
        // {
        //     label: "Description",
        //     name: "frontmatter.description",
        //     description: "Enter the project description",
        //     component: "textarea",
        // },
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
            // description: projectInfo.description,
            //choosing a default image so we don't get an error
            hero_image: projectInfo.hero ? projectInfo.hero : '/content/images/ren-ran-bBiuSdck8tU-unsplash.jpg'
        } )
    },
    body: () => `New post, who dis?`
} )

export default withPlugin( ProjectsList, CreateProjectButton )
