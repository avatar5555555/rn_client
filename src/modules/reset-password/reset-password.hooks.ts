import { useCallback } from "react"
import { useNavigation } from "@react-navigation/native"
import { Alert } from "react-native"
import { useIntl } from "react-intl"

import { SignUpFormValues, errors } from "./reset-password.schema"

import { useSendResetPasswordCodeMutation } from "src/types"
import { Route } from "src/route"
import { sharedErrors } from "src/shared-schema"

export const useSubmit = () => {
  const intl = useIntl()
  const [handleRegistration] = useSendResetPasswordCodeMutation()
  const navigation = useNavigation()

  return useCallback(
    async (values: SignUpFormValues) => {
      try {
        await handleRegistration({ variables: values })

        navigation.navigate(Route.ConfirmNewPassword, { email: values.email })
      } catch (error) {
        Alert.alert(
          intl.formatMessage(sharedErrors.errorTitle),
          intl.formatMessage(errors.emailDoesNotExist),
        )
      }
    },
    [handleRegistration, intl, navigation],
  )
}
