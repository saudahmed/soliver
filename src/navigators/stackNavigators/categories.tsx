import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/types/rootStackParams";
import Categories from "src/pages/categories/Categories";
import SubCategories from "src/pages/subCategories/SubCategories";

import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import Header from "src/components/header/Header";
import ButtonBack from "src/components/button/back/back";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  headerStyle: {
    backgroundColor: theme.palette.background.main,
  },
  headerTitleStyle: {
    ...theme.typography.headlineS,
    color: theme.palette.primary.main,
    textAlign: "center",
  },
}));

const StackNavigator = () => {
  const styles = useStyles();

  return (
    <Stack.Navigator
      initialRouteName="CategoriesScreen"
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
          name="CategoriesScreen"
          component={Categories}
          options={() => ({
            headerTitle: () => (
              <Header headingText="New" subheadingText="205 Atikel" />
            ),
            headerLeft: () => <ButtonBack onButtonPress={() => {}} />,
          })}
        />
        <Stack.Screen
          name="SubCategoriesScreen"
          component={SubCategories}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Header headingText="New" subheadingText="205 Atikel" />
            ),
            headerLeft: () => (
              <ButtonBack
                onButtonPress={() => {
                  navigation.goBack();
                }}
              />
            ),
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
