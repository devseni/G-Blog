import { gql } from "@apollo/client";

export const GET_BLOGS_INFO = gql`
  query {
    posts {
      title
      id
      author {
        ... on Author {
          id
          name
          avatar {
            url
          }
        }
      }
      coverPhoto {
        url
      }
      slug
    }
  }
`;

export const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      avatar {
        url
      }
      slug
    }
  }
`;

export const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

export const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          name
          avatar {
            url
          }
          field
        }
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
`;

export const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;
