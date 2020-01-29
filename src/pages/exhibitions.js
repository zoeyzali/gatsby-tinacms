import React from 'react'
import Layout from '../components/layout'
import ExhibitionsList from '../components/ExhibitionsList'
import SEO from '../components/seo'

const exhibitions = () => (
  <Layout>
    <SEO title="Exhibitions & Shows" />
    <div className="container mx-auto px-4 rounded-lg overflow-hidden mt-8 py-6">
      <h1 className="font-medium text-center sm:text-md px-2">Rece<span className="bg-yellow-800 tracking-widest shadow-lg">nt Exhibitions</span>
      </h1>
      <ExhibitionsList />
    </div>
  </Layout>
)


export default exhibitions
