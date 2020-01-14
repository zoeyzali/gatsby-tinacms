// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
const Fluid = `
  base64
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
`

module.exports.gatsbyNodeGraphQL = {
    artworks: `
{allContentfulArtworks(sort: {fields[data___date], order: DESC}){
    edges{
        node{
            fields{
                slug 
                title
            }
            images {
            title
            fluid(maxWidth: 1800) {
              ${Fluid}
            }
          }
        }
    }
}}
`
}