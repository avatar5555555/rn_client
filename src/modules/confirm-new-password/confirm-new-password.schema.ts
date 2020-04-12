import * as yup from "yup"
import { defineMessages } from "react-intl"

import { ConfirmNewPasswordField } from "./confirm-new-password.types"

import { minPasswordLength, maxPasswordLength } from "src/config"
import { sharedErrors } from "src/shared-schema"

export const i18n = defineMessages({
  title: {
    id: "confirmNewPassword.title",
    defaultMessage: "Confirm New Password",
  },
  codeLabel: {
    id: "confirmNewPassword.codeLabel",
    defaultMessage: "Code",
  },
  emailLabel: {
    id: "confirmNewPassword.emailLabel",
    defaultMessage: "Email",
  },
  passwordLabel: {
    id: "confirmNewPassword.passwordLabel",
    defaultMessage: "New Password",
  },
  confirmButtonLabel: {
    id: "confirmNewPassword.confirmButtonLabel",
    defaultMessage: "Confirm",
  },
  sendNewCodeButtonLabel: {
    id: "confirmNewPassword.sendNewCodeButtonLabel",
    defaultMessage: "Send New Code",
  },
})

export const errors = defineMessages({
  invalidCode: {
    id: "confirmNewPassword.invalidCode",
    defaultMessage: "Invalid Code",
  },
  shortPassword: {
    id: "confirmNewPassword.shortPassword",
    defaultMessage: "Short password",
  },
  longPassword: {
    id: "confirmNewPassword.longPassword",
    defaultMessage: "Long password",
  },
})

export const schema = yup.object({
  [ConfirmNewPasswordField.Email]: yup
    .string()
    .email(sharedErrors.invalid.id)
    .required(sharedErrors.required.id),
  [ConfirmNewPasswordField.Password]: yup
    .string()
    .min(minPasswordLength, errors.shortPassword.id)
    .max(maxPasswordLength, errors.shortPassword.id)
    .required(sharedErrors.required.id),
  [ConfirmNewPasswordField.Code]: yup
    .string()
    .required(sharedErrors.required.id),
})

export type ConfirmNewPasswordFormValues = yup.InferType<typeof schema>
