import React, { useCallback } from "react"
import { SafeAreaView, View, Text } from "react-native"
import { useIntl } from "react-intl"
import { FormikProps } from "formik"
import { useNavigation } from "@react-navigation/native"

import { i18n, SignInFormValues } from "./sign-in.schema"
import { SignInField } from "./sign-in.types"

import styled, { scale } from "src/ui/theme"
import { TextField } from "src/ui/text-field"
import { Title } from "src/ui/title"
import { Button } from "src/ui/button"
import { Overlay } from "src/ui/overlay"
import { ImageBackgroundRoot } from "src/ui/image-background-root"
import { Route } from "src/route"

const TitleBox = styled(View)`
  margin-top: ${scale(20)}px;
`

const InputBox = styled(View)`
  margin-top: ${scale(100)}px;
`

const ForgotPasswordText = styled(Text)`
  font-family: ${({ theme }) => theme.MontserratSemiBold};
  font-size: ${scale(12)}px;
  color: ${({ theme }) => theme.colors.gray};
`

const SignUpBox = styled(View)`
  margin-top: ${scale(170)}px;
  flex-direction: row;
  justify-content: center;
`

const SignUpText = styled(ForgotPasswordText)`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: ${scale(8)}px;
`

const NotAMemberText = styled(ForgotPasswordText)`
  color: ${({ theme }) => theme.colors.white};
`

export const SignInForm = (props: FormikProps<SignInFormValues>) => {
  const intl = useIntl()
  const navigation = useNavigation()

  const handleForgotPassword = useCallback(() => {
    navigation.navigate(Route.ResetPassword)
  }, [navigation])

  const handleSignUp = useCallback(() => {
    navigation.navigate(Route.SignUp)
  }, [navigation])

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
          >
            <ForgotPasswordText onPress={handleForgotPassword}>
              {intl.formatMessage(i18n.forgotLabel)}
            </ForgotPasswordText>
          </TextField>

          <Button
            loading={props.isSubmitting}
            onPress={props.handleSubmit}
            disabled={props.isSubmitting}
            label={intl.formatMessage(i18n.buttonLabel)}
          />
        </InputBox>

        <SignUpBox>
          <NotAMemberText>
            {intl.formatMessage(i18n.notAMemberLabel)}
          </NotAMemberText>

          <SignUpText onPress={handleSignUp}>
            {intl.formatMessage(i18n.signUp)}
          </SignUpText>
        </SignUpBox>
      </ImageBackgroundRoot>
    </SafeAreaView>
  )
}
