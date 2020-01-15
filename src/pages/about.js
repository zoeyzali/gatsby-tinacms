import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

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
          fixed(width: 350, height: 350) {
              ...GatsbyContentfulFixed_tracedSVG
        }
        }
      }
    }
  }
}
`

const AboutPage = () => {
    return (
        <StaticQuery query={getArtistBio} render={data => {
            return (
                <>
                    <div className="container max-w-sm mx-auto flex p-5">
                        {data.artistBio.edges.map( ( { node: artist } ) => {
                            return (
                                <div key={artist.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <Img className="w-full" fixed={artist.portrait.fixed} alt={artist.name} />
                                    <div className="px-6 py-4">
                                        <div className="font-light text-4xl mb-3">
                                            {artist.name}
                                            <p className="text-gray-600 text-base mt-2 text-justify">
                                                {artist.bio.bio}
                                            </p>
                                        </div>
                                        <div className="px-6 py-4">
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#ArtistStudio</span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Bio</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        } )}
                    </div>
                </>
            )
        }}
        />
    )
}

export default AboutPage
