import React from 'react'
import ExhibitionsList from "../components/ExhibitionsList"

const Home = () => {
    return (
        <div className="container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "4rem", marginTop: "4rem", fontWeight: "400" }}>COCO</h2>
            <p>Unfiltered</p>
            <h3>ART STUDIOS</h3>
            <ExhibitionsList />
        </div>
    )
}

export default Home
