import React, { useEffect } from "react"
import { Formik } from "formik"
import { useRoute, useNavigation } from "@react-navigation/native"

import {
  ConfirmNewPasswordFormValues,
  schema,
} from "./confirm-new-password.schema"
import { useSubmit } from "./confirm-new-password.hooks"
import { ConfirmNewPasswordForm } from "./confirm-new-password.form"

export const ConfirmNewPassword = () => {
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
    <Formik<ConfirmNewPasswordFormValues>
      onSubmit={handleSubmit}
      initialValues={{ email, code: "", password: "" }}
      validationSchema={schema}
      component={ConfirmNewPasswordForm}
    />
  )
}
