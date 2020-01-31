import React from 'react'
import SEO from "./seo"

const Contact = () => {
    return (
        <>
            <SEO title="Contact Info" />
            <div className="container mx-auto bg-blue-800 rounded-lg py-6">
                <div className="px-2 items-center justify-center">
                    <div className="text-lg text-white tracking-wider text-center font-normal">
                        <p>bookingInfo: > info@cococollective.com</p>
                        <p>contactInfo: > zoeecoding@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
