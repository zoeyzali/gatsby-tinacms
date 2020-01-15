import React from 'react'
import ExhibitionsList from "../components/ExhibitionsList"

const Home = () => {
    return (
        <div className="w-100 antialiased" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "4rem" }} className="mt-20 font-light tracking-wide">COCO</h2>
            <p>Unfiltered</p>
            <h3>ART STUDIOS</h3>
            <ExhibitionsList />
        </div>
    )
}

export default Home
