import gql from "graphql-tag"

export const ResetPassword = gql`
  mutation resetPassword($email: String!, $password: String!, $code: String!) {
    resetPassword(email: $email, newPassword: $password, code: $code) {
      user {
        id
        email
        emailVerified
      }
      token
    }
  }
`
export const SendConfirmNewPasswordCode = gql`
  mutation sendConfirmNewPasswordCode($email: String!) {
    sendCode(email: $email) {
      user {
        id
        email
        emailVerified
      }
    }
  }
`
