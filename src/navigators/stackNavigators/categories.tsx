import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/types/rootStackParams";
import Categories from "src/pages/categories/Categories";
import SubCategories from "src/pages/subCategories/SubCategories";
import { RootState } from "src/store";
import { useSelector } from "react-redux";

import Header from "src/components/header/Header";
import ButtonBack from "src/components/button/back/back";

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const { categoriesTotal, subCategoriesTotal } = useSelector(
    (state: RootState) => {
      return state.categories;
    }
  );

  return (
    <Stack.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="CategoriesScreen"
          component={Categories}
          options={() => ({
            headerTitle: () => (
              <Header
                headingText="New"
                subHeadingText={`${categoriesTotal}  Artikel`}
              />
            ),
            // headerLeft: () => <ButtonBack onButtonPress={() => {}} />,
          })}
        />
        <Stack.Screen
          name="SubCategoriesScreen"
          component={SubCategories}
          options={({ navigation, route }) => {
            const { category } = route.params;
            return {
              headerTitle: () => (
                <Header
                  headingText={category}
                  subHeadingText={`${subCategoriesTotal}  Artikel`}
                />
              ),
              headerLeft: () => (
                <ButtonBack
                  onButtonPress={() => {
                    navigation.goBack();
                  }}
                />
              ),
            };
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
