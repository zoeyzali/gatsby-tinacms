import React from 'react'
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Admin from '../components/Admin'
import Login from '../components/Login'
import PrivateRoute from '../components/PrivateRoute'
import SEO from "../components/seo"
import { getUser, isLoggedIn } from '../components/AuthUtils/Auth'


const App = () => {
    return (
        <Layout>
            <SEO title="Admin" />
            <div className="text-center container mx-auto lg:mt-8 xl:mt-10 py-8 bg-yellow-700">
                <div className="antialiased text-center text-white">
                    <h3 className="font-medium capitalize">
                        Hello {isLoggedIn() ? getUser().name : "Stranger"}!</h3>
                    <span className="text-md font-medium">This route is under construction</span>
                </div>
            </div>
            <Router>
                <PrivateRoute exact path="/app/admin" component={Admin} />
                <Login exact path="/app/login" />
            </Router>
        </Layout>
    )
}

export default App