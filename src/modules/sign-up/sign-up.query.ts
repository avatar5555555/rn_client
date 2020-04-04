import gql from "graphql-tag"

export const SignUp = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      user {
        id
      }
      token
    }
  }
`
