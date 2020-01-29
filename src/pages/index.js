import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home"
import { useStaticQuery, graphql } from "gatsby"


const IndexPage = () => {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
    )
    return (
        <Layout>
            <SEO title={site.siteMetadata.title} />
            <Home />
        </Layout>
    )
}

export default IndexPage



