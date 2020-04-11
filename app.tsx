import "react-native-gesture-handler"
import React, { memo } from "react"
import LottieView from "lottie-react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { ApolloProvider } from "@apollo/react-hooks"

import { SignIn } from "src/modules/sign-in/sign-in.screen"
import { client } from "src/services/apollo-client"
import { Home } from "src/modules/home/home.screen"
import { SignUp } from "src/modules/sign-up/sign-up.screen"
import { Route } from "src/route"
import { useMeQuery } from "src/types"
import { IntlService } from "src/services/intl"
import { ThemeProvider, theme } from "src/ui/theme"
import { ConfirmEmail } from "src/modules/confirm-email/confirm-email.screen"

const Stack = createStackNavigator()

const Root = memo(() => {
  const { loading } = useMeQuery()

  if (loading) {
    return <LottieView autoPlay source={require("./loader.json")} />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Route.Home}>
        <Stack.Screen name={Route.Home} component={Home} />
        <Stack.Screen name={Route.SignIn} component={SignIn} />
        <Stack.Screen name={Route.SignUp} component={SignUp} />
        <Stack.Screen name={Route.ConfirmEmail} component={ConfirmEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
})

Root.displayName = "Root"

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <IntlService>
        <ThemeProvider theme={theme}>
          <Root />
        </ThemeProvider>
      </IntlService>
    </ApolloProvider>
  )
}
