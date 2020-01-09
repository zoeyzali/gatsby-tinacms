import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home"
import ProjectsList from "../components/ProjectsList"
// import { Link, graphql } from "gatsby"
// import { remarkForm } from 'gatsby-tinacms-remark'
// import BlogPostForm from '../components/BlogPostForm'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <p>Welcome to your new Gatsby site.</p>
    <ProjectsList />
  </Layout>
)

export default IndexPage


// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//       ...TinaRemark
//     }
//   }
// `

