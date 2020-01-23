import React from 'react'
import { getUser } from './AuthUtils/Auth'

const Admin = () => (
    <div className="text-center mt-6 xl:mt-8">
        <h1 className="tracking-wide font-semibold mt-3 py-3 text-center">Admin Settings</h1>
        <ul>
            <li>Name: <span className="bg-yellow-800 capitalize">{getUser().name}</span></li>
            <li>Email: <span className="bg-yellow-800">{getUser().email}</span></li>
        </ul>
    </div>
)

export default Admin