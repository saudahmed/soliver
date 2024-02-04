import { useEffect, useCallback } from "react";
import { View, ScrollView, Dimensions, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import Container from "src/components/container/Container";
import { RootStackParamList } from "src/types/rootStackParams";
import ButtonIcon from "src/components/button/icon/icon";
import CategoryCard from "src/components/categoryCard/CategoryCard";

import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";

import { fetchAllArticles, useDispatch, RootState } from "src/store";

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllArticles());
  }, []);

  const paddingHorizontal = 16;
  const numColumns = 2;
  const gap = 12;
  const screenWidth = Dimensions.get("window").width - paddingHorizontal * 2;

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
    <Container paddingHorizontal={16}>
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
            onButtonPress={() => {}}
          />
        </View>
      </View>
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
                onButtonPress={() => {}}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={articles}
        renderItem={renderItem}
        numColumns={numColumns}
        contentContainerStyle={{ gap }}
        columnWrapperStyle={{ gap }}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default Categories;
