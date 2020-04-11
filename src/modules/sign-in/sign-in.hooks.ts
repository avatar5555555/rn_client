import { useCallback } from "react"
import { useNavigation } from "@react-navigation/native"
import { Alert } from "react-native"
import { useIntl } from "react-intl"
import { FormikHelpers } from "formik"

import { SignInFormValues, errors } from "./sign-in.schema"

import { useSignInMutation } from "src/types"
import { Route } from "src/route"
import { sharedErrors } from "src/shared-schema"
import { authStorage } from "src/services/auth-storage"

export const useSubmit = () => {
  const intl = useIntl()
  const [handleRegistration] = useSignInMutation()
  const navigation = useNavigation()

  return useCallback(
    async (
      values: SignInFormValues,
      formikHelpers: FormikHelpers<SignInFormValues>,
    ) => {
      try {
        const { data } = await handleRegistration({ variables: values })

        if (!data?.signIn?.user.emailVerified) {
          Alert.alert(
            intl.formatMessage(sharedErrors.errorTitle),
            intl.formatMessage(errors.confirmEmail),
          )

          return navigation.navigate(Route.ConfirmEmail, {
            email: values.email,
          })
        }

        if (data.signIn.token) {
          await authStorage.setToken(data.signIn.token)

          return navigation.navigate(Route.Home)
        }

        throw new Error()
      } catch (error) {
        Alert.alert(
          intl.formatMessage(sharedErrors.errorTitle),
          intl.formatMessage(errors.invalidCredentials),
        )
        formikHelpers.resetForm({
          values: { email: values.email, password: "" },
        })
      }
    },
    [handleRegistration, intl, navigation],
  )
}
