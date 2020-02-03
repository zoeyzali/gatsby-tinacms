import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'



const Banner = () => {
    const data = useStaticQuery( graphql`
    query {
         artSign: file(relativePath: {eq: "posters/arts-sign.jpeg"}) {
            childImageSharp{
                fluid(maxWidth: 250){
    ...GatsbyImageSharpFluid
                }
            }
        }
        paintArt: file( relativePath: { eq: "posters/create-space.jpeg" } ){
    childImageSharp{
        fluid( maxWidth: 250 ){
    ...GatsbyImageSharpFluid
        }
    }
}
 filmArt: file( relativePath: { eq: "posters/banner-casestudy.jpg" } ){
    childImageSharp{
        fluid( maxWidth: 250 ){
    ...GatsbyImageSharpFluid
        }
    }
}
}
    `)

    return (
        <div className="banner">
            <div className="container mx-auto">
                <div className="row">
                    <div className="side-image left">
                        <Img fluid={data.artSign.childImageSharp.fluid} alt={data.artSign.childImageSharp.fluid} className="rounded-lg shadow-lg" />
                    </div>
                    <div className="main-text">
                        <h1 className="tracking-widest uppercase font-bold">ARTIST COLLECTIVE & Studios</h1>
                    </div>
                    <div className="main-image">
                        <Img fluid={data.filmArt.childImageSharp.fluid} alt={data.filmArt.childImageSharp.fluid} className="rounded-lg shadow-lg" />

                    </div>

                    <div className="side-image right">
                        <Img fluid={data.paintArt.childImageSharp.fluid} alt={data.paintArt.childImageSharp.fluid} className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
