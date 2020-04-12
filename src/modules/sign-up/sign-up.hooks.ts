import { useCallback } from "react"
import { useNavigation } from "@react-navigation/native"
import { Alert } from "react-native"
import { useIntl } from "react-intl"

import { SignUpFormValues, errors } from "./sign-up.schema"

import { useSignUpMutation } from "src/types"
import { Route } from "src/route"
import { sharedErrors } from "src/shared-schema"

export const useSubmit = () => {
  const intl = useIntl()
  const [handleRegistration] = useSignUpMutation()
  const navigation = useNavigation()

  return useCallback(
    async (values: SignUpFormValues) => {
      try {
        await handleRegistration({ variables: values })

        navigation.navigate(Route.ConfirmEmail, { email: values.email })
      } catch (error) {
        Alert.alert(
          intl.formatMessage(sharedErrors.errorTitle),
          intl.formatMessage(errors.emailAlreadyExists),
        )
      }
    },
    [handleRegistration, intl, navigation],
  )
}
