import { graphql, useStaticQuery } from 'gatsby'


export default function useProjectData() {
    const data = useStaticQuery( graphql`
    query getProjectData{
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }, filter: {fileAbsolutePath: {regex: "/projects/"}}){
        edges{
            node{
                id
                frontmatter{
                    date(formatString: "MMMM Do, YYYY")
                    author
                    title
                    hero_image{
                        childImageSharp{
                            fluid(maxWidth: 600){
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                excerpt(pruneLength: 200)
                fields{
                    slug
                }
            }
        }
    }
    allImageSharp{
        edges{
            node{
                fluid{
                    src
                    originalName
                }
            }
        }
    }
}
`
    )
    return data.allMarkdownRemark.edges
}