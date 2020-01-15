import React from 'react'
import img from '../../images/logo_ZA.png'

const Card = () => {
    return (
        <div className="bg-white border rounded-lg overflow-hidden">
            <img src={img} alt={img} />
            <div className="p-6">
                <h4 className="font-semibold text-xl leading-tight truncate">Card Title Example</h4>
                <div className="text-gray-600 text-sm font-semibold text-capitalize tracking-wide">
                    Some more info text. Some more info text.
                    Some more info text.
            </div>
                <div className="mt-2">
                    <span className="text-gray-600 text-sm">Date 2020</span>
                </div>
                <div className="mt-4">
                    Exhibition Location
            </div>
            </div>
        </div>
    )
}

export default Card
