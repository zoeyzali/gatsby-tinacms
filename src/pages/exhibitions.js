import React from 'react'
import Layout from '../components/layout'
import ExhibitionsList from '../components/ExhibitionsList'
import SEO from '../components/seo'

const exhibitions = () => (
    <Layout>
        <SEO title="Exhibition & Shows" />
        <div className="w-100 antialiased text-center my-8 pt-8 -mx-3">
            <h1 className="font-semibold text-4xl sm:text-md px-2">Rece<span className="bg-yellow-800 tracking-wide">nt Exhibitions</span>
            </h1>
            <ExhibitionsList />
        </div>
    </Layout>
)


export default exhibitions
