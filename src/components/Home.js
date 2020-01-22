import React from 'react'
import ExhibitionsList from "../components/ExhibitionsList"
import CaseStudy from './CaseStudy'


const Home = () => {
    return (
        <div className="w-100 container antialiased text-center">
            <h2 className="mt-10 font-light tracking-wide text-6xl text-gray-800">COCO.</h2>
            <h3 className="font-lighter tracking-widest text-2xl text-gray-700">ART STUDIOS</h3>

            <div className="my-4">
                <h2 className="font-light text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl text-center text-gray-800 px-8">
                    we are an inter-desciplinary artist collective.  we make socially conscious films, illustration, sound and visual installations. pretentious AF.
                </h2>
            </div>
            <div className="py-2">
                <br />
            </div>
            <CaseStudy />
            <div className="mt-10">
                <h3 className="px-2 font-semibold">Rece<span className="bg-yellow-800">nt Exhibitions</span>
                </h3>
                <ExhibitionsList />
            </div>
        </div>
    )
}

export default Home
