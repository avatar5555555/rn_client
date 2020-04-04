import React from "react"
import { Formik } from "formik"

import { SignUpFormValues, initialValues, schema } from "./sign-up.schema"
import { useSubmit } from "./sign-up.hooks"
import { SignUpForm } from "./sign-up.form"

export const SignUp = () => {
  const handleSubmit = useSubmit()

  return (
    <Formik<SignUpFormValues>
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}
      component={SignUpForm}
    />
  )
}
