import React from 'react'
import Img from 'gatsby-image'
// import { graphql } from 'gatsby'
// import useProjectData from '../hooks/useProjectData'
import Layout from '../components/layout'

const ProjectDetail = ( props ) => {
    const data = props.project
    // const allProjectData = useProjectData()

    console.log( props.data, 'props.data' )
    // console.log( allProjectData, 'all detail' )

    return (
        <Layout>
            <div className="w-full md:w-1/2 mb-6 md:mb-0 bg-white mx-auto border rounded-lg shadow-xl mt-4">
                <Img fluid={data.frontmatter.hero_image.childImageSharp.fluid} alt={data.frontmatter.title} className="h-64 object-fit object-center object-cover" />
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
                    <div className="font-semibold text-xs">
                        Added by {data.frontmatter.author}
                    </div>
                    { /*<a href={`projects/${nextSlug}`} className="">
                </a> */}
                </div>
            </div>
        </Layout>
    )
}



export default ProjectDetail


// export const getProjectData = graphql`
// query($slug: String!){
//     markdownRemark( fields: {slug: {eq: $slug}}){
//         id
//         rawFrontmatter
//         rawMarkdownBody
//         fileRelativePath
//         fields{
//                 slug
//             }
//             frontmatter{
//             title
//             author
//             date(formatString: "MMMM Do, YYYY")
//             hero_image{
//                 childImageSharp{
//                 fluid( maxWidth: 1200){
//                 ...GatsbyImageSharpFluid
//             }
//             }
//         }
//     }
//     html
// }
// }
// `