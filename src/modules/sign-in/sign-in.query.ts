import gql from "graphql-tag"

export const SignIn = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      user {
        email
        emailVerified
        id
      }
      token
    }
  }
`
