import * as React from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SafeAreaContainer } from "src/components/container";

import { RootStackParamList } from "src/types/rootStackParams";

const WishList = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "HomeScreen">) => {
  return (
    <SafeAreaContainer edges={["top"]}>
      <View style={{ flex: 1 }}></View>
    </SafeAreaContainer>
  );
};

export default WishList;
