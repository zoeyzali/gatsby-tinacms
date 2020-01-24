import React from 'react'
import useCaseStudy from '../hooks/useCaseStudy'
import VisualArtModule from './VideoModule'
import { Gallery } from './Gallery'


const CaseStudy = () => {
    const caseData = useCaseStudy()

    return (
        <div className="flex justify-between -mx-3 mb-6 antialiased shadow-lg">
            <div className="bg-gray-100 px-4 shadow-lg">
                <h1 className="font-semibold uppercase sm:text-md md:text-lg lg:text-xl xl:text-4xl tracking-wider px-2 mt-2">
                    <span className="bg-yellow-800 tracking-widest align-middle">case</span>study</h1>

                {caseData.edges.map( ( { node: singleCase } ) => {
                    return (
                        <div className="flex flex-wrap text-gray-800"
                            key={singleCase.id}>

                            <div className="w-full xl:w-3/4 lg:w-11/12 mx-auto flex">
                                <div className="w-full lg:w-1/2 bg-white rounded-lg lg:rounded-l-none px-2 text-left">
                                    <h3 className="font-semibold text-lg sm:text-sm md: text-lg lg:text-xl xl:text-3xl mt-2">
                                        {singleCase.title}
                                    </h3>
                                    <span className="text-xs font-medium">
                                        {singleCase.event}
                                    </span>
                                    <br />
                                    <span className="text-xs font-semibold leading-snug">
                                        {singleCase.place}
                                    </span>
                                    <p className="text-xs md:text-md mt-2">{singleCase.description.childMarkdownRemark.excerpt}
                                    </p>
                                </div>

                                <div className="w-full lg:w-1/2 bg-white p-2 rounded-lg lg:rounded-l-none">
                                    {singleCase.gallery.map( ( media, id ) => {
                                        if ( media.file.contentType === "image/jpeg" || media.file.contentType === "image/png" ) {
                                            return (
                                                <Gallery key={id} media={media}
                                                />
                                            )
                                        } else {
                                            return (
                                                <VisualArtModule key={id}
                                                    media={media}
                                                />
                                            )
                                        }
                                    } )}
                                </div>
                            </div>

                            <hr className="mb-8 border-t shadow-md" />
                            <div className="px-2 xl:px-16 text-left text-sm">
                                <p className="leading-tight">{singleCase.description.description}
                                </p>
                            </div>
                        </div>
                    )
                } )}
            </div>
        </div>
    )
}

export default CaseStudy


