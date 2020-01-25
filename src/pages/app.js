import React from 'react'
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Admin from '../components/Admin'
import Login from '../components/Login'
import PrivateRoute from '../components/PrivateRoute'
// import useProjectData from "../hooks/useProjectData"
import ProjectDetail from '../components/ProjectDetail'

function App( props ) {
    console.log( props, 'from app' )


    return (
        <Layout>
            <Router>
                <PrivateRoute exact path="/app/admin" component={Admin} />
                <Login exact path="/app/login" />
                <PrivateRoute exact path={`/app/projects/${"slug"}`} component={ProjectDetail} />
            </Router>
        </Layout>
    )
}

export default App