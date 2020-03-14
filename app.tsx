import React from "react";
import LottieView from "lottie-react-native";
import { ApolloProvider } from "@apollo/react-hooks";

import { client } from "src/services/apollo-client";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <LottieView autoPlay source={require("./loader.json")} />
    </ApolloProvider>
  );
};
