import React from 'react'
import CaseStudy from './CaseStudy'
// import { isLoggedIn, getUser } from './AuthUtils/Auth'

const Home = () => {
    // const content = { message: "", login: true }
    // if ( isLoggedIn() ) {
    //     content.message = `Hello, ${getUser().name}`
    // } else {
    //     content.message = `Booo, you are not logged in`
    // }
    // <span>{content.message}</span>

    return (
        <>
            <div className="w-full antialiased text-center py-6 text-gray-700">
                <h2 className="mt-6 font-light tracking-wide text-5xl">COCO.</h2>
                <h3 className="font-lighter tracking-widest text-2xl">
                    ARTIST COLLECTIVE</h3>

                <div className="my-4 mx-auto">
                    <h2 className="font-light sm:text-sm md:text-xl lg:text-xl xl:text-2xl text-gray-800 px-20 sm:px-4">
                        we are an interdesciplinary artist collective. we make socially relevant and sometimes provacative art films, illustration, sound and visual installations. some call us pretentious AF collective.
                </h2>
                </div>
                <div className="py-4">
                </div>
            </div>
            <hr className="mb-6 border-t shadow-lg" />

            <div className="container mx-auto mt-4">
                <CaseStudy />
            </div>
        </>
    )
}

export default Home
