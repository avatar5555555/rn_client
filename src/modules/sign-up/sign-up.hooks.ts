import { useCallback } from "react"
import { useNavigation } from "@react-navigation/native"
import { Alert } from "react-native"
import { useIntl } from "react-intl"
import { FormikHelpers } from "formik"

import { SignUpFormValues, errors } from "./sign-up.schema"

import { useRegisterMutation } from "src/types"
import { Route } from "src/route"
import { authStorage } from "src/services/auth-storage"
import { sharedErrors } from "src/shared-schema"

export const useSubmit = () => {
  const intl = useIntl()
  const [handleRegistration] = useRegisterMutation()
  const navigation = useNavigation()

  return useCallback(
    async (
      values: SignUpFormValues,
      formikHelpers: FormikHelpers<SignUpFormValues>,
    ) => {
      try {
        const { data } = await handleRegistration({ variables: values })
        const token = data?.register?.token

        if (token) {
          authStorage.setToken(token)
          navigation.navigate(Route.Home)
        }
      } catch (error) {
        Alert.alert(
          intl.formatMessage(sharedErrors.errorTitle),
          intl.formatMessage(errors.emailAlreadyExists),
        )
        formikHelpers.resetForm()
      }
    },
    [],
  )
}
