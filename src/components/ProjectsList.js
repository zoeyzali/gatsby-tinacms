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
                        <div>
                            ProjectsList Page
                            <Link to={`/projects/${project.node.fields.slug}`} key={project.node.id}>
                                <li className={"projectListStyles.li"} key={project.node.fields.slug}>
                                    <div className={"projectListStyles.list__hero"}>
                                        <Img
                                            fluid={
                                                project.node.frontmatter.hero_image.childImageSharp.fluid
                                            }
                                            alt={project.node.frontmatter.title}
                                        />
                                    </div>
                                    <div className={"projectListStyles.list__info"}>
                                        <h2>{project.node.frontmatter.title}</h2>
                                        <h3>{project.node.frontmatter.date}</h3>
                                        <p>{project.node.excerpt}</p>
                                    </div>
                                </li>
                            </Link>
                        </div>
                    )
                } )}
            </div>
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
        // {
        //   name: "hero",
        //   description: "Pick a good one",
        //   label: "Hero",
        //   component: "image",
        //   // Generate the frontmatter value based on the filename
        //   parse: filename => `/content/images/${filename}`,
        //   // Decide the file upload directory for the image
        //   uploadDir: () => {
        //     return "/content/images/"
        //   },
        //   // Todo: Fix the preview source
        //   previewSrc: (postInfo) => {
        //     return postInfo.hero
        //   },
        // },
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
            hero_image: projectInfo.hero ? projectInfo.hero : '/content/images/ren-ran-bBiuSdck8tU-unsplash.jpg'
        } )
    },
    body: () => `New post, who dis?`
} )

export default withPlugin( ProjectsList, CreateProjectButton )
