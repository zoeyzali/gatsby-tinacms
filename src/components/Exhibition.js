import React from 'react'
import Img from 'gatsby-image'

const Exhibition = ( { exhibition } ) => {
    return (
        <div className="container" key={exhibition.id}>
            <div>
                {exhibition.images.map( ( image, index ) => {
                    return (
                        <Img key={index
                        } fluid={image.fluid} alt={exhibition.title} />
                    )
                } )}
            </div>
        </div>
    )
}

export default Exhibition
