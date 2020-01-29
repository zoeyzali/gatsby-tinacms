import React from 'react'
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import useProjectData from '../hooks/useProjectData'
import Layout from '../components/layout'
import { remarkForm, DeleteAction } from 'gatsby-tinacms-remark'

function Project( props ) {
    const data = props.data.markdownRemark
    const allProjectData = useProjectData()
    const nextSlug = getNextSlug( data.fields.slug )

    function getNextSlug( slug ) {
        const allSlugs = allProjectData.map( project => {
            return project.node.fields.slug
        } )
        const nextSlug = allSlugs[allSlugs.indexOf( slug ) + 1]
        if ( nextSlug !== undefined && nextSlug !== '' ) {
            return nextSlug
        } else {
            return allSlugs[0]
        }
    }

    return (
        <Layout>
            <div className="w-full md:w-1/2 mb-6 md:mb-0 bg-white mx-auto border rounded-lg 
            shadow-xl mt-4">
                <Img fluid={data.frontmatter.hero_image.childImageSharp.fluid} alt={data.frontmatter.title} className="h-64 object-fit object-center object-cover" loading="lazy"
                />
                <div className="text-gray-700 px-2">
                    <h1 className="font-lighter text-4xl capitalize tracking-wide">{data.frontmatter.title}</h1>
                    <span className="text-sm font-semibold">
                        {data.frontmatter.date}
                    </span>
                </div>
                <div className="p-2">
                    <div className="text-sm font-light tracking-tight"
                        dangerouslySetInnerHTML={{ __html: data.html }}>
                        {data.frontmatter.description}
                    </div>
                    <div className="font-semibold text-sm">
                        Added by {data.frontmatter.author}
                        <a href={`/projects/${nextSlug}`}>
                            <svg className="h-10 w-10 fill-current text-gray-800 pt-2 pb-4 float-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const ProjectTemplateOptions = {
    actions: [DeleteAction],
    fields: [
        {
            label: "Project Title",
            name: "rawFrontmatter.title",
            component: "text"
        },
        {
            label: "Date Posted",
            name: "rawFrontmatter.date",
            component: "date"
        },
        {
            label: "Hero Image",
            name: "rawFrontmatter.hero_image",
            component: "image",

            parse: filename => `/content/images/${filename}`,
            uploadDir: () => "/content/images",
            previewSrc: markdownRemark => {
                if ( !markdownRemark.frontmatter.hero_image )
                    return ""
                return markdownRemark.frontmatter.hero_image.childImageSharp.fluid.src
            },
        },
        {
            label: "Author",
            name: 'rawFrontmatter.author',
            component: "text"
        },
        {
            label: "Project Body",
            name: 'rawMarkdownBody',
            component: "markdown"
        },
    ]
}

// export default Project
export default remarkForm( Project, ProjectTemplateOptions )

export const getProjectData = graphql`
query($slug: String!){
    markdownRemark( fields: {slug: {eq: $slug}}){
        id
        fileRelativePath
        rawFrontmatter
        rawMarkdownBody
        fields{
                slug
            }
            frontmatter{
            title
            author
            date(formatString: "MMMM Do, YYYY")
            hero_image{
                childImageSharp{
                fluid( maxWidth: 1200){
                ...GatsbyImageSharpFluid
            }
            }
        }
    }
    html
}
}
`