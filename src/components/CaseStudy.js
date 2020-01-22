import React from 'react'
import useCaseStudy from '../hooks/useCaseStudy'
import Img from 'gatsby-image'
import VisualArtModule from './VideoModule'

const CaseStudy = () => {
    const caseData = useCaseStudy()

    return (
        <div className="antialiased w-full overflow-hidden px-2">
            <div className="flex flex-wrap">
                <h1 className="font-medium uppercase text-base sm:text-sm md: text-lg lg:text-xl xl:text-4xl">
                    <span className="bg-yellow-800 tracking-wider">casest</span>udy</h1>
            </div>
            {/* <-------------------------------> */}

            <div className="flex flex-row bg-gray-100">
                {caseData.edges.map( ( { node: singleCase } ) => {
                    // console.log( singleCase.description.childMarkdownRemark.excerptAst.children, 'excerpts AST?' )
                    return (
                        <>
                            <div className="flex-wrap px-4 mt-2"
                                key={singleCase.id}>
                                <div className="flex-col">
                                    <span className="text-xs">{singleCase.event}
                                    </span>
                                </div>
                                <div className="flex-col">
                                    <span className="text-xs">{singleCase.place}
                                    </span>
                                </div>
                            </div>

                            <div className="px-6 mt-2 text-left text-gray-800">
                                <h3 className="font-light text-base sm:text-sm md: text-lg lg:text-xl xl:text-4xl">
                                    {singleCase.title}
                                </h3>
                                <p className="text-sm">{singleCase.description.childMarkdownRemark.excerpt}
                                </p>
                                <p className="text-sm sm:text-xs md:text-sm lg:text-xl">{singleCase.description.description}
                                </p>
                                <div className="flex-1">
                                </div>
                            </div>
                        </>
                    )
                } )}

            </div>
        </div>
    )
}

export default CaseStudy

//
/*            <div className="max-w-md mx-auto">
                    {singleCase.gallery.map( ( media, id ) => {
                        if ( media.file.contentType === "image/jpeg" ) {
                            return (
                                <Img
                                key={media.id}
                                fluid={media.fluid}
                                alt={media.file.title}
                                className="rounded-lg shadow-xl"
                                />
                            )
                        } else {
                            return <VisualArtModule key={id} media={media} />
                        }
                    }
                    )}
            </div>
        */
