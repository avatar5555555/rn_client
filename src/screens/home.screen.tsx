import React, { useCallback } from "react";
import styled from "styled-components/native";
import { SafeAreaView, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Route } from "src/route";
import { useMeQuery } from "src/types";

const View = styled.View`
  flex-basis: 100%;
`;

export const Home = () => {
  const { data, error } = useMeQuery();
  const navigation = useNavigation();

  console.log({ data, error });

  const handleClick = useCallback(() => {
    navigation.navigate(Route.SignUp);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Button title="sign up" onPress={handleClick} />
      </View>
    </SafeAreaView>
  );
};
