import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const getArtistBio = graphql`
{
  artistBio: allContentfulArtist {
    edges {
      node {
        id
        name
        bio {
          bio
        }
        portrait {
          fluid(maxWidth: 350) {
              src
              ...GatsbyContentfulFluid_tracedSVG
        }
        }
      }
    }
  }
}
`

const AboutPage = () => {
    return (
        <Layout>
            <h1 className="tracking-widest font-light mt-8 py-5 text-center">art & illustrations enthusiast</h1>
            <StaticQuery query={getArtistBio} render={data => {
                return (
                    <div className="max-w-lg mx-auto flex">
                        {data.artistBio.edges.map( ( { node: artist } ) => {
                            return (
                                <div key={artist.id} className="bg-white rounded overflow-hidden shadow-xl">
                                    <Img className="h-100 w-full object-fit object-center" fluid={artist.portrait.fluid} alt={artist.name} />
                                    <div className="px-5 py-4">
                                        <div className="font-light text-5xl">
                                            {artist.name}
                                            <p className="text-gray-600 text-base text-justify mt-2">
                                                {artist.bio.bio}
                                            </p>
                                        </div>
                                        <div className="px-6 py-4">
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#ArtistStudio</span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Portfolio Website</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        } )}
                    </div>
                )
            }}
            />
        </Layout>
    )
}

export default AboutPage
