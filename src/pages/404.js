import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="section bg-blue-800 antialiased">
      <div className="min-h-screen tracking-widest text-white text-center">
        <h1 className="font-semibold mt-8">NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... oh, the sadness.</p>
        <a href="/" className="tex-white font-semibold">Click here to go back.</a>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
