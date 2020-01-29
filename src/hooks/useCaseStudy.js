import { graphql, useStaticQuery } from 'gatsby'

export default function useCaseStudy() {
  const data = useStaticQuery( graphql`
     {
    caseStudyData: allContentfulCaseStudy {
    edges {
      node {
        id
        title
        place
        description {
          description
          childMarkdownRemark {
            html
            excerpt(pruneLength: 140)
          }
        }
        event(formatString: "YYYY-MM-DD")
        gallery {
          id
          file {
            fileName
            contentType
            url
          }
          fixed(width: 300, height: 250) {
            ...GatsbyContentfulFixed_tracedSVG
          }
          fluid(maxWidth: 700) {
                src
              ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }

}
`)
  // console.log( data.caseStudyData, 'casestudy HOOOK' )
  return data.caseStudyData
}

