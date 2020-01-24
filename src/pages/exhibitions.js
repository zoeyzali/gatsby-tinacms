import React from 'react'
import Layout from '../components/layout'
import ExhibitionsList from '../components/ExhibitionsList'
import SEO from '../components/seo'

const exhibitions = () => (
    <Layout>
        <SEO title="Exhibition & Shows" />
        <div className="w-100 antialiased text-center -mx-2 mb-6 mt-8 pt-10">
            <div className="pb-2/3">
                <h2 className="font-semibold text-3xl">Rece<span className="bg-yellow-800 tracking-wide">nt Exhibitions</span>
                </h2>
                <ExhibitionsList />
            </div>
        </div>
    </Layout>
)


export default exhibitions
