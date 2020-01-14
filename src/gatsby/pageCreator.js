// const _ = require( 'lodash' )

const createArtworks = ( list, createPage, template ) =>
    list.forEach( artwork => {
        const {
            lang,
            fields: { slug },
        } = artwork.node

        createPage( {
            path: slug,
            component: template,
            context: {
                slug,
                locale: lang,
            },
        } )
    } )

module.exports = { createArtworks }