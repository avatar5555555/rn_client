import React from "react"
import { Formik } from "formik"

import { SignInFormValues, initialValues, schema } from "./sign-in.schema"
import { useSubmit } from "./sign-in.hooks"
import { SignInForm } from "./sign-in.form"

export const SignIn = () => {
  const handleSubmit = useSubmit()

  return (
    <Formik<SignInFormValues>
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}
      component={SignInForm}
    />
  )
}
