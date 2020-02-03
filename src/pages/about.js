import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from "../components/seo"
import Contact from '../components/Contact'

const getArtistBio = graphql`
{ artistBio: allContentfulArtist {
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
            <SEO title="About" />
            <div className="container mx-auto mt-auto lg:mt-4">
                <h1 className="antialiased tracking-wider font-display mt-8 pt-3 pb-5 text-center">
                    visual art & illustrations collective</h1>
                <div className="flex-row container mx-auto px-0 lg:px-4 flex-wrap text-gray-700 self-center">
                    <div className="flex-col float-left shadow-lg font-semibold">
                        <span className="text-md sm:text-sm ml-12 sm:ml-auto">
                            Loosely defined, an art collective is a group of artists working together to achieve a common objective.
                </span>
                    </div>
                    <hr className="my-2 shadow-lg" />
                    <div className="flex-col flex-wrap shadow-xl -mb-6">
                        <span className="text-md sm:text-xs mr-56 sm:mr-auto font-semibold truncate">
                            Biennial of Young Artists from Europe and the Mediterranean, XIIIth Edition, Berlin (IT)
                        </span>
                    </div>
                    <div className="flex-col flex-wrap">
                        <hr className="my-2 shadow-md" />
                        <span className="text-sm sm:text-xs text-gray-800 font-semibold mr-56 sm:mr-auto">
                            Presenting a conceptual alternative for making art, COCO. write novels, host events, do films, create fashion and so much more.
                          </span>
                    </div>
                </div>
                <StaticQuery query={getArtistBio} render={data => {
                    return (
                        <div className="antialiased flex -mx-4 mb-5">
                            {data.artistBio.edges.map( ( { node: artist } ) => {
                                return (
                                    <div key={artist.id}
                                        className="w-full lg:w-3/5 mb-6 md:mb-0 bg-white mx-auto border rounded  shadow-inner-md shadow-xl flex-wrap">
                                        <div className="px-5 py-8 -mt-10 sm:mt-0 md:mt-0">
                                            <div className="font-light text-6xl text-gray-800">
                                                {artist.name}
                                                <span className="text-sm bg-yellow-800 font-semibold truncate">
                                                    current artist resident</span>
                                                <p className="text-gray-700 text-sm mt-2">
                                                    {artist.bio.bio}
                                                </p>
                                            </div>
                                            <div className="pb-2/3">
                                                <Img className="h-48 object-fit object-cover object-center" fluid={artist.portrait.fluid} alt={artist.name} />
                                            </div>
                                            <div className="px-4 mt-4">
                                                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">#COCO.collective</span>
                                                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">#ArtStudioPortfolio
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } )}
                        </div>
                    )
                }}
                />
            </div>
        </Layout>
    )
}

export default AboutPage
