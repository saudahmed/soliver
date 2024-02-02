import * as React from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import SafeAreaContainer from "src/components/safeAreaContainer/SafeAreaContainer";

import { RootStackParamList } from "src/types/rootStackParams";

const Categories = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "CategoriesScreen">) => {
  return (
    <SafeAreaContainer edges={["top"]}>
      <View style={{ flex: 1 }}>
        <Text>Coming Soon</Text>
      </View>
    </SafeAreaContainer>
  );
};

export default Categories;
