import { useCallback, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Alert } from "react-native"
import { useIntl } from "react-intl"

import {
  ConfirmNewPasswordFormValues,
  errors,
} from "./confirm-new-password.schema"

import {
  useSendResetPasswordCodeMutation,
  useResetPasswordMutation,
} from "src/types"
import { Route } from "src/route"
import { sharedErrors } from "src/shared-schema"
import { authStorage } from "src/services/auth-storage"

export const useSubmit = () => {
  const intl = useIntl()
  const navigation = useNavigation()
  const [handleConfirm] = useResetPasswordMutation()

  return useCallback(
    async (values: ConfirmNewPasswordFormValues) => {
      try {
        const { data } = await handleConfirm({ variables: values })
        const token = data?.resetPassword?.token

        if (token) {
          await authStorage.setToken(token)
          navigation.navigate(Route.Home)
        }
      } catch (error) {
        Alert.alert(
          intl.formatMessage(sharedErrors.errorTitle),
          intl.formatMessage(errors.invalidCode),
        )
      }
    },
    [handleConfirm, intl, navigation],
  )
}

export const useSendNewCode = (): [boolean, () => Promise<void>] => {
  const [isLoading, setIsLoading] = useState(false)
  const [handleSendNewCode] = useSendResetPasswordCodeMutation()
  const route = useRoute()
  const email = (route.params as { email: string }).email

  const handler = useCallback(async () => {
    setIsLoading(true)

    await handleSendNewCode({ variables: { email } })
    setIsLoading(false)
  }, [email, handleSendNewCode])

  return [isLoading, handler]
}
