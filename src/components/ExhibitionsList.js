import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Exhibition from './Exhibition'

const getExhibitionsData = graphql`
{
  allExhibitions: allContentfulExhibitions {
    edges {
      node {
        id
        title
        description {
          description
        }
        eventDate(formatString: "MMMM DD, YYYY")
        images {
          fluid(maxHeight: 400) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        location {
          lat
          lon
        }
      }
    }
  }
}
`
const ExhibitionsList = () => {
  return (
    <StaticQuery query={getExhibitionsData} render={data => {
      return (
        <section className="container">
          {data.allExhibitions.edges.map( ( { node: exhibition } ) => {
            return <Exhibition key={exhibition.id} exhibition={exhibition} />
          } )}
        </section>
      )
    }}
    />
  )
}

export default ExhibitionsList
