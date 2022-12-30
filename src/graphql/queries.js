import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
    query {
        posts {
            title
            slug
            id
            author {
                name
                avatar {
                    url
                }
            }
            coverPhoto {
                url
            }
        }
    }
`
const GET_BLOG_INFO = gql`
    query getBlog($slug: String!) {
        post(where: {slug: $slug}) {
            author {
                avatar {
                    url
                }
                name
                field
                slug
            }
            content {
                html
            }
            title
            coverPhoto {
                url
            }
        }
    }

`

const GET_AUTHORS_INFO = gql`
    query {
        authors {
            name
            id
            slug
            avatar {
                url
            }
        }
    }

`
const GET_AUTHOR_INFO = gql`
    query getAuthor($slug: String!) {
        author(where: {slug: $slug}) {
            id
            field
            name
            description {
                html
            }
            avatar {
                url
            }  
            posts {
                id
                title
                slug
                coverPhoto {
                    url
                }
            }
        }
    }
`

const GET_POST_COMMENTS  = gql`
    query getPostComments($slug: String!) {
    comments(where: {post: {slug: $slug}}) {
        name
        text
        id
    }
}
`

export { GET_BLOGS_INFO, GET_BLOG_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_POST_COMMENTS  }