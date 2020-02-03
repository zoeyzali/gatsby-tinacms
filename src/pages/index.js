import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home"
import Contact from "../components/Contact"

import { graphql } from "gatsby"


export const query = graphql`
  { 
    allExhitbitions: allContentfulExhibitions(sort: {fields: eventDate, order: DESC}) {
      edges {
        node {
          eventDate(formatString: "YYYY-MM-DD")
          id
          title
          slug
          place
          description {
            description
          }
          images {
            fluid(maxHeight: 300) {
              src
       ...GatsbyContentfulFluid_tracedSVG
            }
          }
          contentful_id
        }
      }
      totalCount
    }
    currentExhibitions: allContentfulExhibitions(filter: {eventDate: {gte: "2020-01-30T00:00:00.000Z"}}) {
      edges {
        node {
          eventDate(formatString: "YYYY-MM-DD")
          id
          title
          slug
          place
          description {
            description
          }
          images {
            fluid(maxHeight: 300) {
              src
  ...GatsbyContentfulFluid_tracedSVG
         }
          }
          contentful_id
        }
      }
      totalCount
    }
  }
`

const IndexPage = ( { data } ) => {
  return (
    <Layout>
      <SEO title="COCO. Collective" />
      <Home data={data.currentExhibitions} />
      <Contact />
    </Layout>
  )
}

export default IndexPage



