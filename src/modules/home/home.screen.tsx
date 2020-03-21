import React, { useCallback } from "react"
import { SafeAreaView, Button, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useIntl, defineMessages } from "react-intl"

import styled, { scale } from "src/ui/theme"
import { Route } from "src/route"

const i18n = defineMessages({
  f: {
    defaultMessage: "aa",
    id: "f",
  },
  d: {
    id: "ff",
    defaultMessage: "s",
  },
})

const Root = styled(View)`
  flex-basis: 100%;
  padding-right: ${scale(16)}px;
  padding-left: ${scale(16)}px;
`

export const Home = () => {
  const navigation = useNavigation()
  const intl = useIntl()

  const handleClick = useCallback(() => {
    navigation.navigate(Route.SignUp)
  }, [])

  return (
    <SafeAreaView>
      <Root>
        <Text>{intl.formatMessage(i18n.f)}</Text>
        <Button onPress={handleClick} title="sign up" />
      </Root>
    </SafeAreaView>
  )
}
