import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/types/rootStackParams";
import Categories from "src/pages/categories/Categories";
import SubCategories from "src/pages/subCategories/SubCategories";
import { RootState, resetSubArticles, useDispatch } from "src/store";
import { useSelector } from "react-redux";
import { useFilterArticles } from "src/hooks/filter";

import Header from "src/components/header/Header";
import ButtonBack from "src/components/button/back/back";

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const { articles, subArticles } = useSelector((state: RootState) => {
    return state.categories;
  });

  const dispatch = useDispatch();

  const transformedFilterArticles = useFilterArticles(
    articles,
    "filterArticles"
  );

  const transformedFilterSubArticles = useFilterArticles(
    subArticles,
    "filterSubArticles"
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
                subHeadingText={`${transformedFilterArticles.filteredArticles.length}  Artikel`}
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
                  subHeadingText={`${transformedFilterSubArticles.filteredArticles.length}  Artikel`}
                />
              ),
              headerLeft: () => (
                <ButtonBack
                  onButtonPress={() => {
                    dispatch(resetSubArticles());
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
