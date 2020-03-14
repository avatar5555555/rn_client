import "react-native-gesture-handler";
import React from "react";
// import LottieView from "lottie-react-native";
import { ApolloProvider } from "@apollo/react-hooks";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "src/screens/home.screen";
import { SignUp } from "src/screens/sign-up.screen";
import { client } from "src/services/apollo-client";
import { Route } from "src/route";

const Stack = createStackNavigator();

{
  /* <LottieView autoPlay source={require("./loader.json")} /> */
}

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Route.Home}>
          <Stack.Screen name={Route.Home} component={Home} />
          <Stack.Screen name={Route.SignUp} component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};
