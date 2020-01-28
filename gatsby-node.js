const path = require( "path" )


exports.onCreateNode = ( { node, actions } ) => {
  // Transform the new node here and create a new node or
  // create a new node field.
  const { createNodeField } = actions
  if ( node.internal.type === "MarkdownRemark" ) {
    const slug = path.basename( node.fileAbsolutePath, ".md" )
    createNodeField( {
      //same as node: node
      node,
      name: "slug",
      value: slug
    } )
  }
}

exports.createPages = async ( { graphql, actions } ) => {
  const { createPage } = actions
  //dynamically create pages here
  //get path to template
  const projectTemplate = path.resolve( "./src/template/project.js" )
  const exhibitionTemplate = path.resolve( "./src/template/exhibition.js" )

  //get slugs
  const response = await graphql( `
  query { 
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {order: DESC, fields: timeToRead}) {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
  allContentfulExhibitions {
    edges {
      node {
        slug
        id
        title
        contentful_id
      }
    }
  }
}
`)
  // console.log( response.data.allContentfulExhibitions.edges, 'response gatsby-node' )

  //create new pages with unique slug
  response.data.allMarkdownRemark.edges.forEach( edge => {
    createPage( {
      component: projectTemplate,
      path: `/projects/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    } )
  } )

  response.data.allContentfulExhibitions.edges.forEach( edge => {
    console.log( edge, 'contentful' )
    createPage( {
      component: exhibitionTemplate,
      path: `/exhibitions/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        id: edge.node.id
      }
    } )
  } )
}


exports.onCreatePage = async ( { page, actions } ) => {
  const { createPage } = actions
  if ( page.path.match( /^\/app/ ) ) {
    page.matchPath = "/app/*"
    createPage( page )
  }
}





// Allow me to use something like: import { X } from 'directory' instead of '../../folder/directory'
exports.onCreateWebpackConfig = ( { stage, actions } ) => {
  actions.setWebpackConfig( {
    resolve: {
      modules: [path.resolve( __dirname, 'src' ), 'node_modules'],
    },
  } )
}
