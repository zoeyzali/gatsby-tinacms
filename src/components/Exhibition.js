import React from 'react'
import Img from 'gatsby-image'

const Exhibition = ( { exhibition } ) => {
    return (
        <>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 bg-white border rounded-lg overflow-hidden" key={exhibition.id}>
                {exhibition.images.map( ( image, index ) => {
                    return (
                        <Img key={index} fluid={image.fluid} alt={exhibition.title} className="img-card-top"
                        />
                    )
                } )}
                <div className="mt-1 tracking-tighter">
                    <span className="text-gray-600 text-sm">{exhibition.eventDate}</span>
                </div>
                <div className="p-5">
                    <h4 className="font-semibold text-2xl uppercase leading-tight truncate">{exhibition.title}</h4>
                    <div className="text-gray-600 text-sm font-lighter tracking-wide">
                        {exhibition.description.description}
                    </div>
                    <div className="mt-4 text-gray-800">
                        {exhibition.place}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exhibition
