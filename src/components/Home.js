import React from 'react'
import CurrentExhibitions from './CurrentExhibitions'
import Banner from './Banner'
import HomePageUI from './IntroUI'

const Home = ( { data } ) => {
    return (
        <div className="w-max antialiased text-center text-gray-800 py-8 sm:py-4 sm:pt-2">
            <h2 className="mt-4 py-6 font-light tracking-wide text-5xl">COCO.</h2>
            <Banner />
            <HomePageUI />

            <div className="pb-2 shadow-md" />
            <CurrentExhibitions data={data} />
        </div>
    )
}



export default Home


