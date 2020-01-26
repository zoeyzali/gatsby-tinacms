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
            <h1 className="antialiased tracking-wider font-light mt-6 py-3 text-center">
                visual art & illustrations collective</h1>
            <div className="flex-col float-left flex-wrap shadow-lg border-md">
                <span className="text-sm text-gray-800 ml-4 -mb-10">
                    Loosely defined, an art collective is a group of artists working together to achieve a common objective.
                </span>
                <hr className="my-3 border-t shadow-lg" />
                <div className="flex wrap float-right shadow-xl">
                    <sp className="text-sm text-gray-800 mx-40 py-6">
                        Biennial of Young Artists from Europe and the Mediterranean, XIIIth Edition, Berlin (IT)
                        </sp>
                </div>
            </div>
            <StaticQuery query={getArtistBio} render={data => {
                return (
                    <div className="antialiased flex-wrap -mx-4 mb-5">
                        {data.artistBio.edges.map( ( { node: artist } ) => {
                            return (
                                <div key={artist.id}
                                    className="w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0 bg-white mx-auto border rounded-md shadow-lg">
                                    <div className="px-5 py-8">
                                        <div className="font-light text-4xl">
                                            {artist.name}
                                            <span className="text-sm bg-yellow-800 font-semibold">current artist resident</span>
                                            <p className="text-gray-700 text-sm mt-2">
                                                {artist.bio.bio}
                                            </p>
                                        </div>
                                        <div className="pb-2/3 rounded">
                                            <Img className="h-64 object-fit object-cover object-center" fluid={artist.portrait.fluid} alt={artist.name} />
                                        </div>
                                        <div className="px-6 mt-4">
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
