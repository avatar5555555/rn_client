import React from "react"
import {
  SafeAreaView,
  ImageBackground,
  StyleProp,
  ImageStyle,
  View,
} from "react-native"
import { useIntl } from "react-intl"
import { FormikProps } from "formik"

import { i18n, SignUpFormValues } from "./sign-up.schema"
import { SignUpField } from "./sign-up.types"

import styled, { scale } from "src/ui/theme"
import { TextField } from "src/ui/text-field"
import { Title } from "src/ui/title"
import { Button } from "src/ui/button"
import { Overlay } from "src/ui/overlay"
import { deviceWidth, deviceHeight } from "src/config"

const TitleBox = styled(View)`
  margin-top: ${scale(20)}px;
`

const InputBox = styled(View)`
  margin-top: ${scale(100)}px;
`

const Root = styled(ImageBackground)`
  flex-basis: 100%;
  padding-right: ${scale(16)}px;
  padding-left: ${scale(16)}px;
  position: relative;
`

const backgroundImage: StyleProp<ImageStyle> = {
  position: "absolute",
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.45)",
  width: deviceWidth,
  height: deviceHeight,
}

export const SignUpForm = (props: FormikProps<SignUpFormValues>) => {
  const intl = useIntl()

  return (
    <SafeAreaView>
      <Root
        source={require("src/images/sign-up-bg.png")}
        resizeMethod="resize"
        imageStyle={backgroundImage}
      >
        <Overlay />

        <TitleBox>
          <Title isBackgroundDark>{intl.formatMessage(i18n.title)}</Title>
        </TitleBox>

        <InputBox>
          <TextField
            isBackgroundDark
            name={SignUpField.Email}
            label={intl.formatMessage(i18n.emailLabel)}
          />

          <TextField
            isBackgroundDark
            name={SignUpField.Password}
            label={intl.formatMessage(i18n.passwordLabel)}
          />

          <Button
            loading={props.isSubmitting}
            onPress={props.handleSubmit}
            disabled={props.isSubmitting}
            label={intl.formatMessage(i18n.title)}
          />
        </InputBox>
      </Root>
    </SafeAreaView>
  )
}
