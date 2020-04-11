import { useCallback, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Alert } from "react-native"
import { useIntl } from "react-intl"
import { FormikHelpers } from "formik"

import { ConfirmEmailFormValues, errors } from "./confirm-email.schema"

import { useConfirmEmailMutation, useSendCodeMutation } from "src/types"
import { Route } from "src/route"
import { sharedErrors } from "src/shared-schema"
import { authStorage } from "src/services/auth-storage"

export const useSubmit = () => {
  const intl = useIntl()
  const navigation = useNavigation()
  const [handleConfirm] = useConfirmEmailMutation()

  return useCallback(
    async (
      values: ConfirmEmailFormValues,
      formikHelpers: FormikHelpers<ConfirmEmailFormValues>,
    ) => {
      try {
        const { data, errors } = await handleConfirm({ variables: values })
        const token = data?.confirmEmail?.token

        console.log(errors)

        if (token) {
          await authStorage.setToken(token)
          navigation.navigate(Route.Home)
        }
      } catch (error) {
        console.log(error)
        Alert.alert(
          intl.formatMessage(sharedErrors.errorTitle),
          intl.formatMessage(errors.invalidCode),
        )
        formikHelpers.resetForm()
      }
    },
    [handleConfirm, intl, navigation],
  )
}

export const useSendNewCode = (): [boolean, () => Promise<void>] => {
  const [isLoading, setIsLoading] = useState(false)
  const [handleSendNewCode] = useSendCodeMutation()
  const route = useRoute()
  const email = (route.params as { email: string }).email

  const handler = useCallback(async () => {
    setIsLoading(true)

    await handleSendNewCode({ variables: { email } })
    setIsLoading(false)
  }, [email, handleSendNewCode])

  return [isLoading, handler]
}
