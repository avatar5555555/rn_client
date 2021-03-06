import gql from "graphql-tag"

export const SignUp = gql`
  mutation signUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      user {
        id
        email
        emailVerified
      }
    }
  }
`
