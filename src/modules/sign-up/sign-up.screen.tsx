import React from "react"
import { SafeAreaView, ImageBackground } from "react-native"
import { useIntl, defineMessages } from "react-intl"
import { Formik } from "formik"

import styled, { scale } from "src/ui/theme"
import { TextField } from "src/ui/text-field"
import { Title } from "src/ui/title"
import { Button } from "src/ui/button"
import { Overlay } from "src/ui/overlay"

enum SignUpFields {
  Password = "password",
  Email = "email",
}

const i18n = defineMessages({
  title: {
    id: "signUp.title",
    defaultMessage: "Sign up",
  },
  passwordLabel: {
    id: "signUp.passwordLabel",
    defaultMessage: "Password",
  },
  emailLabel: {
    id: "signUp.emailLabel",
    defaultMessage: "Email",
  },
  buttonLabel: {
    id: "signUp.emailLabel",
    defaultMessage: "Email",
  },
})

const Root = styled(ImageBackground)`
  flex-basis: 100%;
  padding-right: ${scale(16)}px;
  padding-left: ${scale(16)}px;
  position: relative;
`

export const SignUp = () => {
  const intl = useIntl()

  return (
    <SafeAreaView>
      <Formik onSubmit={console.log} initialValues={{ email: "" }}>
        <Root source={require("src/images/sign-up-bg.png")}>
          <Overlay />

          <Title isBackgroundDark>{intl.formatMessage(i18n.title)}</Title>

          <TextField
            isBackgroundDark
            name={SignUpFields.Email}
            label={intl.formatMessage(i18n.emailLabel)}
          />

          <TextField
            isBackgroundDark
            name={SignUpFields.Password}
            label={intl.formatMessage(i18n.passwordLabel)}
          />

          <Button
            onPress={console.log}
            label={intl.formatMessage(i18n.title)}
          />
        </Root>
      </Formik>
    </SafeAreaView>
  )
}
