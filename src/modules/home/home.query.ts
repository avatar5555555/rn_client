import gql from "graphql-tag"

export const Me = gql`
  query Me {
    me {
      id
      email
    }
  }
`
