import React from "react"
import { Formik } from "formik"

import {
  SignUpFormValues,
  initialValues,
  schema,
} from "./reset-password.schema"
import { useSubmit } from "./reset-password.hooks"
import { ResetPasswordForm } from "./reset-password.form"

export const ResetPassword = () => {
  const handleSubmit = useSubmit()

  return (
    <Formik<SignUpFormValues>
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}
      component={ResetPasswordForm}
    />
  )
}
