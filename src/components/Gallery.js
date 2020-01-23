import React from 'react'
import Img from 'gatsby-image'

export const Gallery = ( props ) => {
    const galleryImages = props.media
    // console.log( galleryImages.fluid, 'from gallery' )
    //style="background-image: url("galleryImages")"

    return (
        <div
            className="">
            <Img
                key={galleryImages.id}
                fluid={galleryImages.fluid}
                alt={galleryImages.title}
                className="h-32 object-center object-cover rounded-lg shadow-xl"
            />
        </div>
    )
}