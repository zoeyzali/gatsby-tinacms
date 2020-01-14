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
          fixed(width: 200, height: 200) {
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
            console.log( data.artistBio.edges, 'query data' )
            return (
                <section className="about-page">
                    <div className="container">
                        <div className="row" style={{ marginTop: "5rem", textAlign: "center" }}>
                            <h1>Bio</h1>
                            {data.artistBio.edges.map( ( { node: artist } ) => {
                                return (
                                    <div key={artist.id}>
                                        <h3>{artist.name}</h3>
                                        <div>
                                            <Img fixed={artist.portrait.fixed} alt={artist.name} />
                                        </div>
                                        <p>{artist.bio.bio}</p>
                                    </div>
                                )
                            } )}
                        </div>
                    </div>
                </section>
            )
        }}
        />
    )
}

export default AboutPage
