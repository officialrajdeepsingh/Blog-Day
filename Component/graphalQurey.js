import gql from 'graphql-tag';

export  const POST_QUERY = gql`query postData {
  generalSettings {
    url
    description
    timezone
    title
  }

  __typename
  posts{
  edges{
    node {
      id
      title
      slug
      excerpt
      categories {
        nodes {
          name
          id
        }
      }
      featuredImage {
          altText
          title
          sourceUrl        
      }
    }
    }
  }
}` 

export const POST_READ = gql`query GET_POST($id: ID!) {
    post(id: $id) {
       id
       commentCount
       title
       content
       dateGmt
       modifiedGmt
       slug
       date
       excerpt
       commentStatus
       featuredImage {
         altText
         sourceUrl
         title
       }
       categories {
         edges {
           node {
             name
           }
         }
       }
       author {
         name
         avatar {
           url
         }
       }
       categories {
        nodes {
          posts {
            nodes {
              title
              id
              slug
              featuredImage{
                sourceUrl
                altText
              }
            }
          }
        }
      }
     }
   }`

export const POST_HEADER= gql`query Menu {
  __typename
 menu(id:"TWVudToz") {
    id
    name
    slug
     menuItems {
        nodes {
          label
          menuItemId
          id
          url
          connectedObject {
            __typename
            ... on Page {
              id
              title
              slug
            }
            ... on Post {
              id
              title
            }
          }
        }
      }
  }
}`

const POST_FOOTER= `{
 menu(id:"TWVudToyMw==") {
    id
    name
    slug
     menuItems {
        nodes {
          label
          menuItemId
          id
          url
          connectedObject {
            __typename
            ... on Page {
              id
              title
              slug
            }
            ... on Post {
              id
              title
            }
          }
        }
      }
  }
}`

export default POST_FOOTER


export const POST_COMMENT = gql`query GET_POST($id: ID!) {
  post(id: $id) {
    id
    title
    slug
    date
    postId
    featuredImage {
      altText
      sourceUrl
    }
    author {
      userId
      name
    }
    comments {
      nodes {
        ...CommentFields
        replies: children {
          nodes {
            ...CommentFields
          }
        }
      }
    }
  }
}

fragment CommentFields on Comment {
  id
  approved
  content
  author {
    ... on CommentAuthor {
      name
    }
  }
}`

export const PAGE_QUERY = gql`query GET_PAGE($id: ID!) {       
  page(id: $id) {
      content
      title
      featuredImage {
        altText
        sourceUrl(size: LARGE)
        id
      }
    }
  
 }`



export const POST_SEARCH = `query Search($search:String!) {
  posts(where: {search: $search}) {
  nodes {
      id
      slug
      title
      featuredImage {
      sourceUrl
      altText
      }
      author {
          name
      }
  }
  }
}`



export const SIGNUP_MUTATION =`mutation MyMutation($userData: RegisterUserInput!) {
  registerUser(input: $userData) {
    clientMutationId
    user {
      email
      id
      jwtAuthToken
      userId
      username
    }
  }
}`



   
export const COMMENT_MUTATION = `
mutation CREATE_COMMENT($input: CreateCommentInput!) {
    createComment(input: $input ) {
        success
        clientMutationId
    }
}
`



export const LOGIN_MUTATION =`mutation LoginUser($username : String!, $password : String!) {
  login( input: {
    clientMutationId:"uniqueId"
    username: $username
    password: $password
  } ) {
    authToken
    user {
      userId
      username
      name
    }
  }
}`



export const FORGET_PASSWARD_MUTATION =`
mutation MyMutation($getUserName:String!) {
  __typename
  sendPasswordResetEmail(input: {clientMutationId: "sendPassward", username: $getUserName}) {
    clientMutationId
  }
}
`