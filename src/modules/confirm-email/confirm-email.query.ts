import gql from "graphql-tag"

export const ConfirmEmail = gql`
  mutation confirmEmail($email: String!, $code: String!) {
    confirmEmail(email: $email, code: $code) {
      user {
        id
        email
        emailVerified
      }
      token
    }
  }
`
export const SendCode = gql`
  mutation sendCode($email: String!) {
    sendCode(email: $email) {
      user {
        id
        email
        emailVerified
      }
    }
  }
`
