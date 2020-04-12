import * as yup from "yup"
import { defineMessages } from "react-intl"

import { ResetPasswordField } from "./reset-password.types"

import { sharedErrors } from "src/shared-schema"

export const i18n = defineMessages({
  title: {
    id: "resetPassword.title",
    defaultMessage: "Reset Password",
  },
  emailLabel: {
    id: "resetPassword.emailLabel",
    defaultMessage: "Email",
  },
  buttonLabel: {
    id: "resetPassword.buttonLabel",
    defaultMessage: "Send Code",
  },
})

export const errors = defineMessages({
  emailDoesNotExist: {
    id: "resetPassword.emailDoesNotExist",
    defaultMessage: "Email doesn't exist",
  },
})

export const schema = yup.object({
  [ResetPasswordField.Email]: yup
    .string()
    .email(sharedErrors.invalid.id)
    .required(sharedErrors.required.id),
})

export type SignUpFormValues = yup.InferType<typeof schema>

export const initialValues: SignUpFormValues = {
  email: "",
}
