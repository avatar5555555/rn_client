import React, { useCallback } from "react"
import { SafeAreaView, Button, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useApolloClient } from "@apollo/react-hooks"

import styled, { scale } from "src/ui/theme"
import { Route } from "src/route"
import { useMeQuery } from "src/types"
import { authStorage } from "src/services/auth-storage"

const Root = styled(View)`
  flex-basis: 100%;
  padding-right: ${scale(16)}px;
  padding-left: ${scale(16)}px;
`

export const Home = () => {
  const navigation = useNavigation()
  const apolloClient = useApolloClient()

  const { data } = useMeQuery()

  const handleClick = useCallback(() => {
    navigation.navigate(Route.SignUp)
  }, [])

  const handleLogout = useCallback(async () => {
    await authStorage.removeToken()
    apolloClient.resetStore()
  }, [])

  return (
    <SafeAreaView>
      <Root>
        <Text>{JSON.stringify(data)}</Text>
        <Button onPress={handleClick} title="sign up" />
        <Button onPress={handleLogout} title="log out" />
      </Root>
    </SafeAreaView>
  )
}
