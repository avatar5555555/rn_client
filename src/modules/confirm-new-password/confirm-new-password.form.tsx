import React, { useEffect, useRef, useCallback } from "react"
import { SafeAreaView, View, Keyboard, Animated } from "react-native"
import { useIntl } from "react-intl"
import { FormikProps } from "formik"

import {
  i18n,
  ConfirmNewPasswordFormValues,
} from "./confirm-new-password.schema"
import { ConfirmNewPasswordField } from "./confirm-new-password.types"
import { useSendNewCode } from "./confirm-new-password.hooks"

import styled, { scale } from "src/ui/theme"
import { TextField } from "src/ui/text-field"
import { Title } from "src/ui/title"
import { Button } from "src/ui/button"
import { Overlay } from "src/ui/overlay"
import { ImageBackgroundRoot } from "src/ui/image-background-root"

const TitleBox = styled(View)`
  margin-top: ${scale(20)}px;
`

const ButtonBox = styled(View)`
  margin-top: ${scale(20)}px;
`

export const ConfirmNewPasswordForm = (
  props: FormikProps<ConfirmNewPasswordFormValues>,
) => {
  const intl = useIntl()
  const [isLoading, handleSendNewCode] = useSendNewCode()
  const formAnimation = useRef(new Animated.Value(scale(70))).current

  const keyboardIn = useCallback(() => {
    Animated.timing(formAnimation, {
      useNativeDriver: true,
      toValue: scale(20),
      duration: 150,
    }).start()
  }, [formAnimation])

  const keyboardOut = useCallback(() => {
    Animated.timing(formAnimation, {
      useNativeDriver: true,
      toValue: scale(70),
      duration: 150,
    }).start()
  }, [formAnimation])

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyboardIn,
    )

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardOut,
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [keyboardIn, keyboardOut])

  return (
    <SafeAreaView>
      <ImageBackgroundRoot
        source={require("src/images/confirm-new-password-bg.png")}
      >
        <Overlay />

        <TitleBox>
          <Title isBackgroundDark>{intl.formatMessage(i18n.title)}</Title>
        </TitleBox>

        <Animated.View style={[{ transform: [{ translateY: formAnimation }] }]}>
          <TextField
            isBackgroundDark
            name={ConfirmNewPasswordField.Email}
            label={intl.formatMessage(i18n.emailLabel)}
            editable={false}
          />

          <TextField
            isBackgroundDark
            name={ConfirmNewPasswordField.Password}
            label={intl.formatMessage(i18n.passwordLabel)}
            textContentType="newPassword"
            autoCompleteType="off"
          />

          <TextField
            isBackgroundDark
            name={ConfirmNewPasswordField.Code}
            label={intl.formatMessage(i18n.codeLabel)}
          />

          <Button
            loading={isLoading}
            onPress={handleSendNewCode}
            disabled={isLoading}
            label={intl.formatMessage(i18n.sendNewCodeButtonLabel)}
            backgroundColor="gray"
          />

          <ButtonBox>
            <Button
              loading={props.isSubmitting}
              onPress={props.handleSubmit}
              disabled={props.isSubmitting}
              label={intl.formatMessage(i18n.confirmButtonLabel)}
            />
          </ButtonBox>
        </Animated.View>
      </ImageBackgroundRoot>
    </SafeAreaView>
  )
}
