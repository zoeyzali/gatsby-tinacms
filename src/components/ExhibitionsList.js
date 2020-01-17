import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Exhibition from './Exhibition'

const getExhibitionsData = graphql`
{
  allExhibitions: allContentfulExhibitions (sort: {fields: eventDate, order: DESC}){
    edges {
      node {
        id
        title
        description {
          description
        }
        eventDate(formatString: "MMMM DD, YYYY")
        images {
          fluid(maxHeight: 350) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        location {
          lat
          lon
        }
        place
      }
    }
  }
}
`
const ExhibitionsList = () => {
  return (
    <StaticQuery query={getExhibitionsData} render={data => {
      return (
        <div className="flex justify-center flex-wrap px-2">
          {data.allExhibitions.edges.map( ( { node: exhibition } ) => {
            return <Exhibition key={exhibition.id} exhibition={exhibition} />
          } )}
        </div>
      )
    }}
    />
  )
}

export default ExhibitionsList
