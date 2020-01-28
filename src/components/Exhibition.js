import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const Exhibition = ( { exhibition } ) => {
    console.log( exhibition, 'exibi' )
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 bg-white border rounded-lg overflow-hidden shadow-xl lg:mb-3 xl:mb-4 sm:mb-0"
            key={exhibition.id}>
            {exhibition.images.map( ( image, index ) => {
                return (
                    <Img key={index} fluid={image.fluid} alt={exhibition.title}
                    />
                )
            } )}
            <div className="tracking-wide text-gray-600">
                <span className="font-semibold text-xs">{exhibition.eventDate}</span>
                <div className="font-semibold">
                    {exhibition.place}
                </div>
            </div>
            <div className="pt-2 text-gray-700">
                <Link to={`/exhibitions/${exhibition.slug}`} rel="noopener" key={exhibition.id}>
                    <h1 className="font-semibold text-lg uppercase tracking-tight truncate text-gray-800">{exhibition.title}</h1>
                </Link>
            </div>
        </div>
    )
}

export default Exhibition
