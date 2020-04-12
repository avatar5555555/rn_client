import React from "react"
import { SafeAreaView, View } from "react-native"
import { useIntl } from "react-intl"
import { FormikProps } from "formik"

import { i18n, SignInFormValues } from "./sign-in.schema"
import { SignInField } from "./sign-in.types"

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

export const SignInForm = (props: FormikProps<SignInFormValues>) => {
  const intl = useIntl()

  return (
    <SafeAreaView>
      <ImageBackgroundRoot source={require("src/images/sign-in-bg.png")}>
        <Overlay />

        <TitleBox>
          <Title isBackgroundDark>{intl.formatMessage(i18n.title)}</Title>
        </TitleBox>

        <InputBox>
          <TextField
            isBackgroundDark
            name={SignInField.Email}
            label={intl.formatMessage(i18n.emailLabel)}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
          />

          <TextField
            isBackgroundDark
            name={SignInField.Password}
            label={intl.formatMessage(i18n.passwordLabel)}
            textContentType="password"
            autoCompleteType="password"
          />

          <Button
            loading={props.isSubmitting}
            onPress={props.handleSubmit}
            disabled={props.isSubmitting}
            label={intl.formatMessage(i18n.buttonLabel)}
          />
        </InputBox>
      </ImageBackgroundRoot>
    </SafeAreaView>
  )
}
