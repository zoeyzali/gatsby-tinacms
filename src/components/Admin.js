import React from 'react'
import { getUser, isLoggedIn } from './AuthUtils/Auth'
import { withPlugin } from 'tinacms'
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark'
import useProjectData from "../hooks/useProjectData"

// import { Link } from "gatsby"


const Admin = () => {
    const projectsData = useProjectData()
    return (
        <div className="text-center mt-4 xl:mt-6 bg-red-500">
            <div className="antialiased text-center text-gray-800">
                <h3 className="text-center font-medium capitalize pt-2">
                    Hello {isLoggedIn() ? getUser().name : "Stranger"}!</h3>

                <p className="px-2 text-xs">
                    Name:> <span className="capitalize">
                        {getUser().name}</span>
                    <br />
                    Email:> <span className="">
                        {getUser().email}</span>
                </p>

                <div className="px-4 py-6">
                    {isLoggedIn() ? (
                        <span className="text-xs text-center">
                            List of added content. Click on the links to edit. Add new content from the sidebar. {" "}
                            <br />
                            {projectsData.filter( project => project.node.frontmatter.title !== "" ).map( project => {
                                // console.log( project.node.fields.slug )
                                return (
                                    <a href={`/app/projects/${project.node.fields.slug}`} rel="noopener" key={project.node.fields.slug} className="text-md font-medium">
                                        <span key={project.node.id}>{project.node.frontmatter.title}
                                        </span>
                                    </a>
                                )
                            } )}
                        </span>
                    ) : ( <p>Protected route</p> )
                    }
                </div>
            </div>
        </div>
    )
}


// create "tinaCMS WYSIWYG" sidebar form
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

export default withPlugin( Admin, CreateProjectButton )
