import * as yup from "yup"
import { defineMessages } from "react-intl"

import { ConfirmEmailField } from "./confirm-email.types"

import { sharedErrors } from "src/shared-schema"

export const i18n = defineMessages({
  title: {
    id: "confirmEmail.title",
    defaultMessage: "Confirm email",
  },
  codeLabel: {
    id: "confirmEmail.codeLabel",
    defaultMessage: "Code",
  },
  emailLabel: {
    id: "confirmEmail.emailLabel",
    defaultMessage: "Email",
  },
  confirmButtonLabel: {
    id: "confirmEmail.confirmButtonLabel",
    defaultMessage: "Confirm",
  },
  sendNewCodeButtonLabel: {
    id: "confirmEmail.sendNewCodeButtonLabel",
    defaultMessage: "Send New Code",
  },
})

export const errors = defineMessages({
  invalidCode: {
    id: "confirmEmail.invalidCode",
    defaultMessage: "Invalid Code",
  },
})

export const schema = yup.object({
  [ConfirmEmailField.Email]: yup
    .string()
    .email(sharedErrors.invalid.id)
    .required(sharedErrors.required.id),
  [ConfirmEmailField.Code]: yup.string().required(sharedErrors.required.id),
})

export type ConfirmEmailFormValues = yup.InferType<typeof schema>
