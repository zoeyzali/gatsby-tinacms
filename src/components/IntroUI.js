import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HomePageUI = () => {
    const blurpData = useStaticQuery( graphql`
 query {
         fistPower: file(relativePath: {eq: "posters/fist.png"}) {
            childImageSharp{
                fluid(maxWidth: 300){
                ...GatsbyImageSharpFluid
                }
            }
        }
          artsStatue: file(relativePath: {eq: "posters/arts-statue.jpeg"}) {
            childImageSharp{
                fluid(maxWidth: 300){
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    return (
        <div className="about-intro">
            <div className="container mx-auto">
                <div className="inner-content">
                    <div className="content text-gray-800">
                        <h1 className="font-semibold break-normal">The ability to create</h1>
                        <p className="font-medium">
                            we are an interdesciplinary artist collective. we make socially conscious and sometimes provacative films, installations, illustration, visual and sound design. some call us pretentious AF collective. don't know if we personally agree with that.
                                </p>
                    </div>
                    <div className="images">
                        <div className="top-right">
                            <Img fluid={blurpData.fistPower.childImageSharp.fluid} alt={blurpData.fistPower.childImageSharp.fluid}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="bottom-left">
                            <Img fluid={blurpData.artsStatue.childImageSharp.fluid} alt={blurpData.artsStatue.childImageSharp.fluid}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="black-box"></div>
            <div className="black-box overlay"></div>
        </div>
    )
}

export default HomePageUI
