import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'


const Show = ( { data } ) => {
    const show = data.contentfulExhibitions
    const upcomingEvent = isFuture( show.eventDate )
    console.log( upcomingEvent, 'upcoming' )

    function isFuture( eventDate ) {
        let today = new Date().toLocaleDateString()
        console.log( today, 'tooooday date' )
        let upcomingEvent = new Date( today - eventDate ).toLocaleString()
        if ( today > eventDate ) {
            return upcomingEvent
        } else {
            return "TBA"
        }
    }

    return (
        <Layout>
            <SEO title="Exhibition" />
            <div className="w-full md:w-1/2 mb-6 md:mb-0 mx-auto border shadow-xl bg-white mt-6 rounded-lg">
                <div className="pb-2/3 bg-red-500">
                    {show.images.map( ( image, index ) => {
                        return (
                            <Img key={index} fluid={image.fluid} alt={show.title}
                                className="h-auto object-fit object-center"
                            />
                        )
                    } )}
                </div>
                <div className="tracking-tight text-gray-700 font-lighter px-4">
                    <span className="font-semibold bg-yellow-800 text-xs">{show.eventDate}</span>
                    <br />
                    <span className="text-sm leading-tighter">
                        {show.place}</span>
                </div>
                <div className="px-4 text-gray-700 mt-2">
                    <h2 className="font-semibold uppercase tracking-wider truncate">
                        {show.title}
                    </h2>
                    <span className="font-semibold text-xs pb-2">
                        More info coming soon.
                    </span>
                </div>
            </div>
            <div className="container mx-auto py-4 shadow-md rounded">
                <div className="text-sm font-light leading-tight text-align-center mt-2 px-6 sm:px-2 xl:px-16 xl:text-lg xl:py-4">
                    {show.description.description}
                </div>
            </div>
        </Layout>
    )
}

export default Show

export const query = graphql`
   query ($slug: String! ){
    contentfulExhibitions( slug: { eq: $slug} ) {
    eventDate(formatString: "YYYY-MM-DD")
        slug
        place
        title
        id
        images {
            fluid( maxHeight: 350 ) {
             ...GatsbyContentfulFluid_tracedSVG
            }
        }
        description{
        description
        }  
    }
}
`


