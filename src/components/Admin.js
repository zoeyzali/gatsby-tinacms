import React from 'react'
import { getUser, isLoggedIn } from './AuthUtils/Auth'
import { withPlugin } from 'tinacms'
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark'
import { Link } from "gatsby"

const Admin = () => (
    <div className="text-center mt-4 xl:mt-6">
        <div className="antialiased text-center mb-3 p-2">
            <h1 className="tracking-wide font-semibold text-center">Admin Settings</h1>
            <h3 className="text-center font-medium capitalize">Hello {isLoggedIn() ? getUser().name : "Stranger"}!</h3>
            {isLoggedIn() ? (
                <span className="text-xs text-center">
                    Add Content Here. Preview added content under
                    <Link to="/app/projects" className="text-xs sm:text-sm md:text-lg lg:text-lg xl:text-2xl bg-yellow-800"> Artworks
                    </Link>
                </span>
            ) : (
                    <span className="text-xs text-center">
                        Go to <Link to="/app/login" className="text-xs sm:text-md md:text-lg lg:text-xl xl:text-2xl bg-yellow-800">Login</Link>
                    </span>
                )}

            <p className="py-2">Name:> <span className="bg-yellow-800 capitalize">{getUser().name}</span>
                <br />
                Email:> <span className="bg-yellow-800">{getUser().email}</span>
            </p>
        </div>
    </div>
)


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
