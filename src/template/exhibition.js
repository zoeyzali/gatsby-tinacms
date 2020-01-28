import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'


const Show = ( { data } ) => {
    const show = data.contentfulExhibitions
    console.log( data.contentfulExhibitions.slug )
    console.log( show.images.length, 'SHOW TEMPLATE' )
    const upcomingEvent = isFuture( show.eventDate )
    console.log( upcomingEvent, 'upcoming' )

    function isFuture( eventDate ) {
        console.log( eventDate, 'event date' )
        let today = new Date().toLocaleDateString()
        console.log( today, 'tooooday date' )
        let upcomingEvent = new Date( today - eventDate ).toLocaleString()
        if ( today > eventDate ) {
            return upcomingEvent
        } else {
            console.log( upcomingEvent, 'else' )
            return "TBA"
        }
    }

    return (
        <Layout>
            <SEO title="expos" />
            <div className="w-full md:w-1/2 mb-6 md:mb-0 mx-auto border shadow-xl bg-white mt-4">
                <div className="pb-2/5 bg-red-500 rounded-lg h-full">
                    {show.images.map( ( image, index ) => {
                        return (
                            <Img key={index} fluid={image.fluid} alt={show.title}
                                className="object-cover object-fit object-center"
                            />
                        )
                    } )}
                </div>
                <div className="tracking-tight text-gray-700 font-lighter px-4">
                    <span className="text-xs">{show.eventDate}</span>
                    <br />
                    <span className="text-sm leading-tight">{show.place}</span>
                </div>
                <div className="px-4 text-gray-700">
                    <h2 className="font-semibold uppercase tracking-widest truncate">
                        {show.title}
                    </h2>
                    <span className="font-semibold text-xs">
                        current status:> {upcomingEvent}
                    </span>
                </div>
            </div>
            <div className="container mx-auto py-4">
                <div className="text-md font-light tracking-tight text-align-center mb-2 px-4">
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
            fluid( maxHeight: 300 ) {
             ...GatsbyContentfulFluid_tracedSVG
            }
        }
        description{
        description
        }  
    }
}
`


