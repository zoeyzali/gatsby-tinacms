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
          fluid(maxHeight: 200) {
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
        <div className="flex container mx-auto justify-center flex-wrap py-4 antialiased">
          {data.allExhibitions.edges.map( ( { node: exhibition } ) => {
            return (
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 bg-white border rounded-lg shadow-xl lg:mb-3 xl:mb-4 mb-2 py-2" key={exhibition.id}>

                <Link to={`/exhibitions/${exhibition.slug}`} rel="noopener noreferrer" key={exhibition.id}>
                  <h3 className="font-medium text-lg uppercase tracking-tight truncate text-gray-800 mt-4 sm:mt-2 xl:mt-6 px-2">{exhibition.title}</h3>

                  <div className="pb-2/3 rounded-md">
                    {exhibition.images.map( ( image, index ) => {
                      return (
                        <Img key={index} fluid={image.fluid} alt={exhibition.title}
                          className="h-64 object-fit object-center object-cover"
                        />
                      )
                    } )}
                  </div>
                  <div className="tracking-tight text-gray-800 px-2">
                    <span className="font-semibold text-xs">
                      {exhibition.eventDate}</span>
                    <div className="font-semibold text-sm">
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
