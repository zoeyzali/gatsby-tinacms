import React from 'react'
import CaseStudy from './CaseStudy'
import { isLoggedIn, getUser } from './AuthUtils/Auth'

const Home = () => {
    const content = { message: "", login: true }
    if ( isLoggedIn() ) {
        content.message = `Hello, ${getUser().name}`
    } else {
        content.message = `Booo, you are not logged in`
    }
    return (
        <>
            <div className="w-full antialiased text-center bg-red-500">
                <span>{content.message}</span>
                <h2 className="mt-8 font-light tracking-wide text-6xl text-gray-800">COCO.</h2>
                <h3 className="font-lighter tracking-widest text-2xl text-gray-700">ART STUDIOS</h3>

                <div className="my-4">
                    <h2 className="font-light text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl text-center text-gray-800 px-16">
                        we are an inter-desciplinary artist collective.  we make socially provacative films, illustration, sound and visual installations. pretentious AF.
                </h2>
                </div>
                <div className="py-4">
                </div>
            </div>
            <hr class="mb-8 border-t shadow-xl" />

            <div className="mt-4">
                <CaseStudy />
            </div>
        </>
    )
}

export default Home
