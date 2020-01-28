import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'



const getExhibitionsData = graphql`
{
  allExhibitions: allContentfulExhibitions (sort: {fields: eventDate, order: DESC}){
    edges {
      node {
        id
        title
        slug
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
        <div className="flex container mx-auto justify-center flex-wrap shadow-lg mb-2">
          {data.allExhibitions.edges.map( ( { node: exhibition } ) => {
            return (
              <div className="w-full md:w-3/12 lg:w-3/12 xl:w-1/4 bg-white border rounded-lg shadow-xl lg:mb-3 xl:mb-4 sm:mb-0" key={exhibition.id}>
                <Link to={`/exhibitions/${exhibition.slug}`} rel="noopener noreferrer" key={exhibition.id}>
                  <h3 className="font-light text-lg uppercase tracking-tight truncate text-gray-800 mt-4">{exhibition.title}</h3>
                  <div className="pb-2/5 rounded-md">
                    {exhibition.images.map( ( image, index ) => {
                      return (
                        <Img key={index} fluid={image.fluid} alt={exhibition.title}
                          className="h-64 object-fit object-center object-cover"
                        />
                      )
                    } )}
                  </div>
                  <div className="tracking-wide text-gray-700">
                    <span className="font-semibold text-xs">
                      {exhibition.eventDate}</span>
                    <div className="font-semibold">
                      {exhibition.place}
                    </div>
                  </div>
                </Link>
              </div>
            )
          } )}
        </div>
      )
    }}
    />
  )
}

export default ExhibitionsList
