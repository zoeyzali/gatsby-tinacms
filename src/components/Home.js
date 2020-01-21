import React from 'react'
import ExhibitionsList from "../components/ExhibitionsList"


const Home = () => {
    return (
        <div className="w-100 antialiased text-center">
            <h2 className="mt-12 font-light tracking-wide text-6xl">COCO.</h2>
            <h3 className="font-lighter tracking-widest text-2xl">ART STUDIOS</h3>

            <div className="mt-8 px-2">
                <h2 className="font-light text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl text-center text-gray-800 leading-relaxed whitespace-pre-wrap">we are an inter-desciplinary artist collective.  we make socially conscious films, illustration, sound and visual installations. pretentious AF</h2>
            </div>

            <p className="px-2 text-base">Rece<span className="bg-yellow-800">nt Exhibitions</span>
            </p>
            <ExhibitionsList />
        </div>
    )
}

export default Home
