import React from 'react'
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Admin from '../components/Admin'
import Login from '../components/Login'
import PrivateRoute from '../components/PrivateRoute'

const App = ( { data } ) => {
    console.log( data )

    return (
        <Layout>
            <Router>
                <PrivateRoute exact path="/app/admin" component={Admin} />
                <Login exact path="/app/login" />
            </Router>
        </Layout>
    )
}

export default App