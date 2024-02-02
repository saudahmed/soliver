import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/types/rootStackParams";
import Home from "src/pages/home/Home";

import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  headerStyle: {
    backgroundColor: theme.palette.background.main,
  },
  headerTitleStyle: {
    ...theme.typography.headlineM,
    color: theme.palette.primary.main,
    textAlign: "center",
  },
}));

const StackNavigator = () => {
  const styles = useStyles();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={() => ({
            title: "",
            headerShown: false,
            gestureEnabled: false,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
