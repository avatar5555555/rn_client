import * as yup from "yup"
import { defineMessages } from "react-intl"

import { SignUpField } from "./sign-up.types"

import { minPasswordLength, maxPasswordLength } from "src/config"
import { sharedErrors } from "src/shared-schema"

export const i18n = defineMessages({
  title: {
    id: "signUp.title",
    defaultMessage: "Sign up",
  },
  passwordLabel: {
    id: "signUp.passwordLabel",
    defaultMessage: "Password",
  },
  emailLabel: {
    id: "signUp.emailLabel",
    defaultMessage: "Email",
  },
  buttonLabel: {
    id: "signUp.buttonLabel",
    defaultMessage: "Sign Up",
  },
})

export const errors = defineMessages({
  shortPassword: {
    id: "signUp.shortPassword",
    defaultMessage: "Short password",
  },
  longPassword: {
    id: "signUp.longPassword",
    defaultMessage: "Long password",
  },
  emailAlreadyExists: {
    id: "signUp.emailAlreadyExists",
    defaultMessage: "Email already exists",
  },
})

export const schema = yup.object({
  [SignUpField.Email]: yup
    .string()
    .email(sharedErrors.invalid.id)
    .required(sharedErrors.required.id),
  [SignUpField.Password]: yup
    .string()
    .min(minPasswordLength, errors.shortPassword.id)
    .max(maxPasswordLength, errors.longPassword.id)
    .required(sharedErrors.required.id),
})

export type SignUpFormValues = yup.InferType<typeof schema>

export const initialValues: SignUpFormValues = {
  email: "",
  password: "",
}
