import React, { useEffect } from "react"
import { Formik } from "formik"
import { useRoute, useNavigation } from "@react-navigation/native"

import { ConfirmEmailFormValues, schema } from "./confirm-email.schema"
import { useSubmit } from "./confirm-email.hooks"
import { ConfirmEmailForm } from "./confirm-email.form"

export const ConfirmEmail = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const handleSubmit = useSubmit()

  const email = (route.params as { email: string })?.email

  useEffect(() => {
    if (!email) {
      navigation.goBack()
    }
  }, [email, navigation])

  return (
    <Formik<ConfirmEmailFormValues>
      onSubmit={handleSubmit}
      initialValues={{ code: "", email }}
      validationSchema={schema}
      component={ConfirmEmailForm}
    />
  )
}
