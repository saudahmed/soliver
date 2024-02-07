import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/types/rootStackParams";
import { BottomTabNavigator } from "src/navigators/tabNavigators";
import Filter from "src/pages/filter/Filter";

import Header from "src/components/header/Header";
import ButtonCross from "src/components/button/cross/cross";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="BottomTabScreen"
      screenOptions={{
        headerTitleAlign: "center",
        headerBackVisible: false,
      }}
    >
      <RootStack.Group>
        <RootStack.Screen
          name="BottomTabScreen"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Group>

      {/* Add All Modal Screens here*/}
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen
          name="FilterScreen"
          component={Filter}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Header headingText="Filter" subHeadingText={""} />
            ),
            headerLeft: () => (
              <ButtonCross
                onButtonPress={() => {
                  navigation.goBack();
                }}
              />
            ),
          })}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
