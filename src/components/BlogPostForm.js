import React from 'react'

const BlogPostForm = {
    fields: [
        {
            label: "Title",
            name: "frontmatter.title",
            description: "Enter the title of the post here",
            component: "text",
        },
        {
            label: "Description",
            name: "frontmatter.description",
            description: "Enter the project description",
            component: "textarea",
        },
    ],
}


export default BlogPostForm