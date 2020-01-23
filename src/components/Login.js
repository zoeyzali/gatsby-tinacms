import React, { Component } from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "./AuthUtils/Auth"

class Login extends Component {
    state = {
        username: ``,
        password: ``,
    }

    handleUpdate = event => {
        this.setState( {
            [event.target.name]: event.target.value,
        } )
    }

    handleSubmit = event => {
        event.preventDefault()
        handleLogin( this.state )
    }

    render() {
        if ( isLoggedIn() ) {
            navigate( `/app/admin` )
        }
        
        return (
            <div className="w-full max-w-xs antialiased mx-auto py-5 mt-3">
                <h3 className="font-medium text-center">Login</h3>
                <form
                    className="bg-white shadow-lg rounded px-8 pt-5 pb-8 mb-4"
                    method="post"
                    onSubmit={event => {
                        this.handleSubmit( event )
                        navigate( `/app/admin` )
                    }}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight bg-gray-100 focus:bg-white border-transparent focus:border-blue-400 outline-none"
                            name="username"
                            type="text"
                            placeholder="Username"
                            onChange={this.handleUpdate}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="password">
                            Password
                         </label>
                        <input
                            className="shadow appearance-none border 
                            rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight bg-gray-100 focus:bg-white border-transparent focus:border-blue-400 outline-none" 
                            name="password"
                            type="password"
                            placeholder="Passsword"
                            onChange={this.handleUpdate}
                        />
                        <p className="text-red-500 text-xs hidden">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="login">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-semibold text-sm text-gray-600 hover:text-gray-800" href="/">
                            Forgot Password?
                         </a>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
