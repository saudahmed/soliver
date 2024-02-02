import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/types/rootStackParams";
import Profile from "src/pages/profile/Profile";

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
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: "center",
        gestureEnabled: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="ProfileScreen"
          component={Profile}
          options={() => ({
            title: "",
            headerShown: false,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
