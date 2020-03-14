import React, { Fragment } from "react";
import { StatusBar } from "react-native";
import LottieView from "lottie-react-native";
import styled from "styled-components/native";

const View = styled.View`
  flex-basis: 100%;
`;

export const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View>
        <LottieView autoPlay source={require("./loader.json")} />
      </View>
    </Fragment>
  );
};
