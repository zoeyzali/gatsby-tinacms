import React from 'react'
import Img from 'gatsby-image'

const Exhibition = ( { exhibition } ) => {
    return (
        <>
            <div className="w-1/2 bg-white border rounded-lg overflow-hidden" key={exhibition.id}>
                {exhibition.images.map( ( image, index ) => {
                    return (
                        <Img key={index} fluid={image.fluid} alt={exhibition.title} className="img-card-top"
                        />
                    )
                } )}
                <div className="mt-2">
                    <span className="text-gray-600 text-sm">{exhibition.eventDate}</span>
                </div>
                <div className="p-6">
                    <h4 className="font-semibold text-3xl uppercase leading-tight truncate">{exhibition.title}</h4>
                    <div className="text-gray-600 text-sm font-lighter tracking-wide">
                        {exhibition.description.description}
                    </div>
                    <div className="mt-4">
                        {exhibition.place}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exhibition
