import * as React from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import SafeAreaContainer from "src/components/safeAreaContainer/SafeAreaContainer";

import { RootStackParamList } from "src/types/rootStackParams";

const ShoppingCart = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "ShoppingCartScreen">) => {
  return (
    <SafeAreaContainer edges={["top"]}>
      <View style={{ flex: 1 }}></View>
    </SafeAreaContainer>
  );
};

export default ShoppingCart;
