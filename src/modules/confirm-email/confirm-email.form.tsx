import React from "react"
import { SafeAreaView, View } from "react-native"
import { useIntl } from "react-intl"
import { FormikProps } from "formik"

import { i18n, ConfirmEmailFormValues } from "./confirm-email.schema"
import { ConfirmEmailField } from "./confirm-email.types"
import { useSendNewCode } from "./confirm-email.hooks"

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

const ButtonBox = styled(View)`
  margin-top: ${scale(20)}px;
`

export const ConfirmEmailForm = (
  props: FormikProps<ConfirmEmailFormValues>,
) => {
  const intl = useIntl()
  const [isLoading, handleSendNewCode] = useSendNewCode()

  return (
    <SafeAreaView>
      <ImageBackgroundRoot source={require("src/images/confirm-email-bg.png")}>
        <Overlay />

        <TitleBox>
          <Title isBackgroundDark>{intl.formatMessage(i18n.title)}</Title>
        </TitleBox>

        <InputBox>
          <TextField
            isBackgroundDark
            name={ConfirmEmailField.Email}
            label={intl.formatMessage(i18n.emailLabel)}
            editable={false}
          />

          <TextField
            isBackgroundDark
            name={ConfirmEmailField.Code}
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
        </InputBox>
      </ImageBackgroundRoot>
    </SafeAreaView>
  )
}
