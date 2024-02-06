import { useEffect, useCallback, useState, useMemo } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  FlatList,
  RefreshControl,
} from "react-native";
import { useFilterArticles } from "src/hooks/filter";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import Container from "src/components/container/Container";
import { RootStackParamList } from "src/types/rootStackParams";
import ButtonIcon from "src/components/button/icon/icon";
import CategoryCard from "src/components/categoryCard/CategoryCard";

import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";

import { fetchAllArticles, useDispatch, RootState } from "src/store";
import SafeAreaContainer from "src/components/safeAreaContainer/SafeAreaContainer";

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  sortFilterContainer: {
    paddingVertical: 0,
    flexDirection: "row",
    marginVertical: 12,
  },
  buttonContainer: {
    flex: 1,
  },
  categoriesButtonContainer: {
    paddingRight: 8,
    height: "auto",
  },
}));

const Categories = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "CategoriesScreen">) => {
  const styles = useStyles();
  const { articles, isArticlesLoading, articleCategories } = useSelector(
    (state: RootState) => {
      return state.categories;
    }
  );

  const { filteredArticles } = useFilterArticles(articles, "filterArticles");

  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchAllArticles());
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchAllArticles()).then(() => {
      setRefreshing(false);
    });
  }, []);

  const paddingHorizontal = 16;
  const numColumns = 2;
  const gap = 12;
  const screenWidth = useMemo(
    () => Dimensions.get("window").width - paddingHorizontal * 2,
    []
  );

  const availableSpace = screenWidth - (numColumns - 1) * gap;
  const itemSize = availableSpace / numColumns;

  const renderItem = useCallback(({ item, index }) => {
    return (
      <CategoryCard
        data={item}
        cardSize={itemSize}
        onLikeButtonPress={(id) => {}}
        onOrderButtonPress={(id) => {}}
      />
    );
  }, []);

  return (
    <SafeAreaContainer>
      <Container paddingHorizontal={paddingHorizontal}>
        <View style={styles.sortFilterContainer}>
          <View style={styles.buttonContainer}>
            <ButtonIcon
              text="Beliebteste"
              border={false}
              iconPosition="left"
              iconName="sort"
              onButtonPress={() => {}}
            />
          </View>
          <View style={styles.buttonContainer}>
            <ButtonIcon
              text="Filter"
              border={false}
              iconPosition="left"
              iconName="filter-variant"
              onButtonPress={() => {
                navigation.navigate("FilterScreen", {
                  articles: articles,
                  reducer: "filterArticles",
                });
              }}
            />
          </View>
        </View>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{ marginVertical: 12 }}
          >
            <View style={{ flexDirection: "row" }}>
              {articleCategories.map((category, index) => (
                <View
                  style={styles.categoriesButtonContainer}
                  key={`category_button_${index}`}
                >
                  <ButtonIcon
                    key={index}
                    iconPosition="right"
                    text={category}
                    border
                    iconName="chevron-right"
                    onButtonPress={() => {
                      //Navigate to the SubCategories route with params */
                      navigation.navigate("SubCategoriesScreen", {
                        category,
                      });
                    }}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredArticles}
          renderItem={renderItem}
          numColumns={numColumns}
          contentContainerStyle={{ gap }}
          columnWrapperStyle={{ gap }}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </Container>
    </SafeAreaContainer>
  );
};

export default Categories;
