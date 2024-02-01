import * as React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "src/types/rootStackParams";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  HomeStackNavigator,
  CategoriesStackNavigator,
  ProfileStackNavigator,
  ShoppingCartStackNavigator,
  WishListStackNavigator,
} from "src/navigators/stackNavigators";
import { Theme } from "src/hooks";
import { ITheme } from "src/assets/themes";

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  buttonContainer: {
    position: "relative",
  },
}));

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  const theme = Theme.useTheme();
  const styles = useStyles();

  return (
    <Tab.Navigator
      initialRouteName="CategoriesTab"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarItemStyle: {
          paddingTop: 0,
        },
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = "home-variant-outline";
          } else if (route.name === "CategoriesTab") {
            iconName = "text-search";
          } else if (route.name === "WishListTab") {
            iconName = "heart-outline";
          } else if (route.name === "ShoppingCartTab") {
            iconName = "shopping-outline";
          } else if (route.name === "ProfileTab") {
            iconName = "account-outline";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={18} color={color} />
          );
        },
        tabBarActiveTintColor: theme.palette.primary.main,
        tabBarInactiveTintColor: theme.palette.secondary.dark,
        tabBarLabel: ({ color, focused }) => {
          let label = "";

          if (route.name === "HomeTab") {
            label = "Home";
          } else if (route.name === "CategoriesTab") {
            label = "Kategorien";
          } else if (route.name === "WishListTab") {
            label = "Wunschliste";
          } else if (route.name === "ShoppingCartTab") {
            label = "Warenkorb";
          } else if (route.name === "ProfileTab") {
            label = "Konto";
          }

          return <Text style={{ color, fontSize: 11 }}>{label}</Text>;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="CategoriesTab" component={CategoriesStackNavigator} />
      <Tab.Screen name="WishListTab" component={WishListStackNavigator} />
      <Tab.Screen
        name="ShoppingCartTab"
        component={ShoppingCartStackNavigator}
      />
      <Tab.Screen name="ProfileTab" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
