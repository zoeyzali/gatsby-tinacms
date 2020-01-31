import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home"
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
  // console.log( data.currentExhibitions, 'current queries from IndexPage' )
  // console.log( data.allExhitbitions, 'all queries from IndexPage' )
  // const currentExhibitions = data.currentExhibitions.edges.map( ( { node: current } ) => {
  //   return <ExhibitionsList exhibition={current} key={current.id} />
  // } )
  // const allExhitbitions = data.allExhitbitions.edges.map( ( { node: exhibition } ) => {
  //   return <ExhibitionsList exhibition={exhibition} key={exhibition.id} />
  // } )

  console.log( data.allExhitbitions, 'current and all' )
  return (
    <Layout>
      <SEO title={`COCO. Collective`} />
      <Home data={data.currentExhibitions} />
    </Layout>
  )
}

export default IndexPage



