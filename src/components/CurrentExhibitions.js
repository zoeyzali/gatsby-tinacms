import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


const CurrentExhibitions = ( { data } ) => {
    const today = new Date().toISOString().slice( 0, 10 )
    return (
        <div className="text-gray-800 antialiased py-4">
            <h1 className="font-medium tracking-tighter text-center">cur<span className="bg-yellow-800 tracking-widest shadow-xl">rent shows
                </span>
            </h1>
            <span className="text-sm font-semibold tracking-tight">today:  {today}</span>
            <br />
            <div className="text-sm text-center">
                <Link to={`${/exhibitions/}`}>
                    Check out our <span className="tracking-tight text-sm bg-yellow-800">previous exhibitions</span>
                </Link>
            </div>

            <h3 className="font-display text-center mt-8 pt-5">
                upcoming shows
           </h3>
            <div className="flex container mx-auto justify-center flex-wrap mt-4 py-2">
                {data.edges.map( ( { node: current } ) => {
                    return (
                        <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 bg-white border rounded-lg shadow-xl lg:mb-3 xl:mb-4 mb-2 py-2"
                            key={current.id}>
                            <Link to={`/exhibitions/${current.slug}`} rel="noopener noreferrer" key={current.id}>
                                <h3 className="font-medium text-lg uppercase tracking-tight truncate text-gray-800 mt-4 sm:mt-2 xl:mt-6 px-2">{current.title}</h3>

                                <div className="pb-2/3 rounded-md">
                                    {current.images.map( ( image, index ) => {
                                        return (
                                            <Img key={index} fluid={image.fluid} alt={current.title}
                                                className="h-64 object-fit object-center object-cover"
                                            />
                                        )
                                    } )}
                                </div>
                                <div className="tracking-tight text-gray-800 px-2">
                                    <span className="font-semibold text-xs">
                                        {current.eventDate}</span>
                                    <div className="font-semibold text-sm">
                                        {current.place}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                } )}
            </div>
        </div>
    )
}

export default CurrentExhibitions
