import React from 'react'
import Helmet from 'react-helmet'
import CaseStudy from './CaseStudy'

const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="w-full antialiased text-center py-5 xl:py-10 text-gray-800">
                <h2 className="mt-4 font-light tracking-wide text-5xl">COCO.</h2>
                <h3 className="font-lighter tracking-widest text-2xl">
                    ARTIST COLLECTIVE</h3>
                <div className="py-3 xl:py-8 px-2 lg:px-4 xl:px-6">
                    <h2 className="font-light text-sm sm:text-xs md:text-xl lg:text-xl xl:text-3xl text-gray-800 px-20 sm:px-2">
                        we are an interdesciplinary artist collective. we make socially conscious and sometimes provacative films, installations, illustration, visual and sound design. some call us pretentious AF collective. don't know if we personally agree with that.
                </h2>
                </div>
            </div>
            <hr className="pb-2 shadow-xl" />
            <div className="container mx-auto py-2 w-full">
                <CaseStudy />
            </div>
        </div>
    )
}

export default Home
