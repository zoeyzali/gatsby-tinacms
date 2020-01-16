import React from 'react'
import ExhibitionsList from "../components/ExhibitionsList"

const Home = () => {
    return (
        <div className="w-100 antialiased text-center">
            <h2 className="mt-10 font-light tracking-wide text-6xl">COCO.</h2>
            <h3 className="font-lighter leading-4 tracking-widest text-2xl">ART STUDIOS</h3>
            <p>Recent Exhibitions I was part of</p>
            <ExhibitionsList />
        </div>
    )
}

export default Home
