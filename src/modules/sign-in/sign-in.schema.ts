import * as yup from "yup"
import { defineMessages } from "react-intl"

import { SignInField } from "./sign-in.types"

import { sharedErrors } from "src/shared-schema"

export const i18n = defineMessages({
  title: {
    id: "signIn.title",
    defaultMessage: "Sign up",
  },
  passwordLabel: {
    id: "signIn.passwordLabel",
    defaultMessage: "Password",
  },
  emailLabel: {
    id: "signIn.emailLabel",
    defaultMessage: "Email",
  },
  buttonLabel: {
    id: "signIn.buttonLabel",
    defaultMessage: "Sign In",
  },
})

export const errors = defineMessages({
  invalidCredentials: {
    id: "signIn.invalidCredentials",
    defaultMessage: "Invalid Credentials",
  },
  confirmEmail: {
    id: "signIn.confirmEmail",
    defaultMessage: "Confirm email, please",
  },
})

export const schema = yup.object({
  [SignInField.Email]: yup
    .string()
    .email(sharedErrors.invalid.id)
    .required(sharedErrors.required.id),
  [SignInField.Password]: yup.string().required(sharedErrors.required.id),
})

export type SignInFormValues = yup.InferType<typeof schema>

export const initialValues: SignInFormValues = {
  email: "",
  password: "",
}
