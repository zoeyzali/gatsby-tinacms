import React from 'react'
import Layout from '../components/layout'
import ExhibitionsList from '../components/ExhibitionsList'
import SEO from '../components/seo'
import CaseStudy from '../components/CaseStudy'
import { graphql } from 'gatsby'

export const query = graphql`
{
  allExhitbitions: allContentfulExhibitions( sort: { fields: eventDate, order: DESC } ) {
  edges {
    node {
      eventDate( formatString: "YYYY-MM-DD" )
      id
      title
      slug
      place
      description {
        description
      }
      images {
        fluid( maxHeight: 300 ) {
          src
       ...GatsbyContentfulFluid_tracedSVG
        }
      }
      contentful_id
    }
  }
  totalCount
}
}
`

const exhibitions = ( { data } ) => (
  <Layout>
    <SEO title="Exhibitions & Shows" />
    <div className="container mx-auto px-4 rounded-lg overflow-hidden mt-7 py-6">
      <h1 className="font-medium text-center sm:text-md px-2">Recent & curr<span className="bg-yellow-800 tracking-widest shadow-lg">ent Exhibitions</span>
      </h1>
      <CaseStudy />
      <ExhibitionsList allExhitbitions={data.allExhitbitions} />
    </div>
  </Layout>
)


export default exhibitions
