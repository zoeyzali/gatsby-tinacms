import React from 'react'
import Img from 'gatsby-image'

export const Gallery = ( props ) => {
    const galleryImages = props.media
    return (
        <div
            className="pb-2/3 h-auto">
            <Img
                key={galleryImages.id}
                fluid={galleryImages.fluid}
                alt={galleryImages.title}
                className="h-32 lg:h-48 xl:h-64 object-center object-cover object-fit rounded-lg shadow-xl"
            />
        </div>
    )
}