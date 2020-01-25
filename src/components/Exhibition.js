import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const Exhibition = ( { exhibition } ) => {
    return (
        <div className="max-w-md md:w-1/2 lg:w-1/3 xl:w-1/3 bg-white border rounded-lg overflow-hidden shadow-xl"
            key={exhibition.id}>
            {exhibition.images.map( ( image, index ) => {
                return (
                    <Img key={index} fluid={image.fluid} alt={exhibition.title}
                    />
                )
            } )}
            <div className="tracking-wide">
                <span className="text-gray-700 text-xs">{exhibition.eventDate}</span>
                <div className="text-gray-700">
                    {exhibition.place}
                </div>
            </div>
            <div className="p-2">
                <Link to={`/exhibitions/${exhibition.title}`} rel="noopener" key={exhibition.id}>
                    <h5 className="font-lighter text-xl uppercase tracking-tight truncate">{exhibition.title}</h5>
                </Link>
                <div className="text-gray-700 text-sm font-lighter tracking-tight">
                    {exhibition.description.description}
                </div>
            </div>
        </div>
    )
}

export default Exhibition
