import React from 'react'
import Img from 'gatsby-image'
import { graphql, Link } from "gatsby"
import useProjectData from '../hooks/useProjectData'
import { remarkForm, DeleteAction } from 'gatsby-tinacms-remark'
import Layout from '../components/layout'

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
            <div className="container project-page">
                <article>
                    <figure>
                        <Img fluid={data.frontmatter.hero_image.childImageSharp.fluid} alt={data.frontmatter.title} />
                    </figure>
                    <div className="project-info">
                        <h1>{data.frontmatter.title}</h1>
                        <h3>{data.frontmatter.date}</h3>
                    </div>
                    <div className="project-body" dangerouslySetInnerHTML={{ __html: data.html }}>
                        {data.frontmatter.description}
                    </div>
                    <div className="footer">
                        <h4>{data.frontmatter.author}</h4>
                        <Link to={`projects/${nextSlug}`} className={"projectTemplateStyles.footer__next"}></Link>
                    </div>
                </article>
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
        // {
        //     label: "Description",
        //     name: "rawFrontmatter.description",
        //     description: "Enter the project description",
        //     component: "textarea",
        // },
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