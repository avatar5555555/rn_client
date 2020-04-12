import React from "react"
import { SafeAreaView, View } from "react-native"
import { useIntl } from "react-intl"
import { FormikProps } from "formik"

import { i18n, SignUpFormValues } from "./reset-password.schema"
import { ResetPasswordField } from "./reset-password.types"

import styled, { scale } from "src/ui/theme"
import { TextField } from "src/ui/text-field"
import { Title } from "src/ui/title"
import { Button } from "src/ui/button"
import { Overlay } from "src/ui/overlay"
import { ImageBackgroundRoot } from "src/ui/image-background-root"

const TitleBox = styled(View)`
  margin-top: ${scale(20)}px;
`

const InputBox = styled(View)`
  margin-top: ${scale(100)}px;
`

export const ResetPasswordForm = (props: FormikProps<SignUpFormValues>) => {
  const intl = useIntl()

  return (
    <SafeAreaView>
      <ImageBackgroundRoot source={require("src/images/reset-password-bg.png")}>
        <Overlay />

        <TitleBox>
          <Title isBackgroundDark>{intl.formatMessage(i18n.title)}</Title>
        </TitleBox>

        <InputBox>
          <TextField
            isBackgroundDark
            name={ResetPasswordField.Email}
            label={intl.formatMessage(i18n.emailLabel)}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
          />

          <Button
            loading={props.isSubmitting}
            onPress={props.handleSubmit}
            disabled={props.isSubmitting}
            label={intl.formatMessage(i18n.title)}
          />
        </InputBox>
      </ImageBackgroundRoot>
    </SafeAreaView>
  )
}
