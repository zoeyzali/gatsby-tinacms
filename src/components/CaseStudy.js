import React from 'react'
import useCaseStudy from '../hooks/useCaseStudy'
import VisualArtModule from './VideoModule'
import { Gallery } from './Gallery'


const CaseStudy = () => {
    const caseData = useCaseStudy()

    return (
        <div className="flex justify-center shadow-md text-gray-800 pt-8">
            <div className="bg-gray-100 px-2 rounded-lg shadow-lg">
                <h1 className="font-semibold uppercase text-lg md:text-xl lg:text-2xl xl:text-5xl tracking-wider px-2 mt-2 xl:mt-4">
                    <span className="bg-yellow-800 tracking-widest align-middle shadow-lg">
                        case</span>study</h1>

                {caseData.edges.map( ( { node: singleCase } ) => {
                    return (
                        <div className="flex flex-wrap text-gray-800"
                            key={singleCase.id}>
                            <div className="w-full lg:w-5/6 mx-auto flex">
                                <div className="w-full lg:w-1/2 bg-white rounded-lg px-2">
                                    <h3 className="font-semibold text-lg sm:text-sm md: text-lg lg:text-xl xl:text-3xl mt-2 xl:mt-4 xl:tracking-widest">
                                        {singleCase.title}
                                    </h3>

                                    <span className="text-xs font-semibold">
                                        {singleCase.event}
                                    </span>
                                    <br />
                                    <span className="text-sm font-semibold leading-snug">
                                        {singleCase.place}
                                    </span>
                                    <p className="text-sm xl:text-lg md:text-md xl:mt-2 font-medium">{singleCase.description.childMarkdownRemark.excerpt}
                                    </p>
                                </div>

                                <div className="w-full lg:w-1/2 bg-white rounded-lg p-0 sm:p-2 xl:mt-4">
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
                            <div className="px-4 lg:mt-2 xl:mt-4 xl:px-16 text-left text-sm">
                                <p className="leading-tight font-lighter">{singleCase.description.description}
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


