import gql from "graphql-tag"

export const SendResetPasswordCode = gql`
  mutation sendResetPasswordCode($email: String!) {
    sendCode(email: $email) {
      user {
        id
        email
        emailVerified
      }
    }
  }
`
